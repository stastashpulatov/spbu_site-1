CREATE DATABASE IF NOT EXISTS spbu_schedule;
USE spbu_schedule;

CREATE TABLE faculties (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    code VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE departments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    faculty_id INT,
    name VARCHAR(100) NOT NULL,
    code VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (faculty_id) REFERENCES faculties(id)
);

CREATE TABLE teachers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    department_id INT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    middle_name VARCHAR(50),
    email VARCHAR(100),
    phone VARCHAR(20),
    position VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE programs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    faculty_id INT,
    name VARCHAR(150) NOT NULL,
    code VARCHAR(20),
    level ENUM('bachelor', 'master', 'specialist', 'postgraduate') NOT NULL,
    years_to_complete INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (faculty_id) REFERENCES faculties(id)
);

CREATE TABLE groups (
    id INT PRIMARY KEY AUTO_INCREMENT,
    program_id INT,
    name VARCHAR(50) NOT NULL,
    year_of_study INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (program_id) REFERENCES programs(id)
);

CREATE TABLE subjects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    department_id INT,
    name VARCHAR(150) NOT NULL,
    code VARCHAR(20),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE buildings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE classrooms (
    id INT PRIMARY KEY AUTO_INCREMENT,
    building_id INT,
    number VARCHAR(20) NOT NULL,
    capacity INT,
    type ENUM('lecture', 'seminar', 'computer', 'laboratory', 'other') NOT NULL,
    equipment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (building_id) REFERENCES buildings(id)
);

CREATE TABLE time_slots (
    id INT PRIMARY KEY AUTO_INCREMENT,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    slot_number INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE academic_periods (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    type ENUM('semester', 'module', 'session') NOT NULL,
    academic_year VARCHAR(9) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE schedule (
    id INT PRIMARY KEY AUTO_INCREMENT,
    subject_id INT,
    teacher_id INT,
    group_id INT,
    classroom_id INT,
    time_slot_id INT,
    academic_period_id INT,
    day_of_week ENUM('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday') NOT NULL,
    class_type ENUM('lecture', 'seminar', 'practice', 'laboratory', 'consultation') NOT NULL,
    is_remote BOOLEAN DEFAULT FALSE,
    remote_link VARCHAR(255),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (subject_id) REFERENCES subjects(id),
    FOREIGN KEY (teacher_id) REFERENCES teachers(id),
    FOREIGN KEY (group_id) REFERENCES groups(id),
    FOREIGN KEY (classroom_id) REFERENCES classrooms(id),
    FOREIGN KEY (time_slot_id) REFERENCES time_slots(id),
    FOREIGN KEY (academic_period_id) REFERENCES academic_periods(id)
);

CREATE TABLE schedule_changes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    schedule_id INT,
    change_date DATE NOT NULL,
    new_teacher_id INT,
    new_classroom_id INT,
    new_time_slot_id INT,
    is_cancelled BOOLEAN DEFAULT FALSE,
    reason TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (schedule_id) REFERENCES schedule(id),
    FOREIGN KEY (new_teacher_id) REFERENCES teachers(id),
    FOREIGN KEY (new_classroom_id) REFERENCES classrooms(id),
    FOREIGN KEY (new_time_slot_id) REFERENCES time_slots(id)
);

CREATE INDEX idx_schedule_date ON schedule(start_date, end_date);
CREATE INDEX idx_schedule_group ON schedule(group_id);
CREATE INDEX idx_schedule_teacher ON schedule(teacher_id);
CREATE INDEX idx_schedule_classroom ON schedule(classroom_id);
CREATE INDEX idx_changes_date ON schedule_changes(change_date);

CREATE VIEW current_schedule AS
SELECT 
    s.id,
    sub.name AS subject_name,
    CONCAT(t.last_name, ' ', t.first_name, ' ', IFNULL(t.middle_name, '')) AS teacher_name,
    g.name AS group_name,
    b.name AS building_name,
    c.number AS classroom_number,
    ts.start_time,
    ts.end_time,
    s.day_of_week,
    s.class_type,
    s.is_remote,
    s.remote_link
FROM schedule s
JOIN subjects sub ON s.subject_id = sub.id
JOIN teachers t ON s.teacher_id = t.id
JOIN groups g ON s.group_id = g.id
JOIN classrooms c ON s.classroom_id = c.id
JOIN buildings b ON c.building_id = b.id
JOIN time_slots ts ON s.time_slot_id = ts.id
WHERE CURDATE() BETWEEN s.start_date AND s.end_date;
