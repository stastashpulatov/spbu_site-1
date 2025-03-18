-- Создание базы данных для расписания СПбГУ
CREATE DATABASE spbu_schedule;

-- Подключение к базе данных
\c spbu_schedule

-- Создание перечислений (enum)
CREATE TYPE education_level AS ENUM ('bachelor', 'master', 'specialist', 'postgraduate');
CREATE TYPE room_type AS ENUM ('lecture', 'seminar', 'computer', 'laboratory', 'other');
CREATE TYPE period_type AS ENUM ('semester', 'module', 'session');
CREATE TYPE weekday AS ENUM ('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday');
CREATE TYPE class_type AS ENUM ('lecture', 'seminar', 'practice', 'laboratory', 'consultation');

-- Таблица факультетов
CREATE TABLE faculties (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    code VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица кафедр
CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    faculty_id INTEGER REFERENCES faculties(id),
    name VARCHAR(100) NOT NULL,
    code VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица преподавателей
CREATE TABLE teachers (
    id SERIAL PRIMARY KEY,
    department_id INTEGER REFERENCES departments(id),
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    middle_name VARCHAR(50),
    email VARCHAR(100),
    phone VARCHAR(20),
    position VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица образовательных программ
CREATE TABLE programs (
    id SERIAL PRIMARY KEY,
    faculty_id INTEGER REFERENCES faculties(id),
    name VARCHAR(150) NOT NULL,
    code VARCHAR(20),
    level education_level NOT NULL,
    years_to_complete INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица групп
CREATE TABLE groups (
    id SERIAL PRIMARY KEY,
    program_id INTEGER REFERENCES programs(id),
    name VARCHAR(50) NOT NULL,
    year_of_study INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица дисциплин
CREATE TABLE subjects (
    id SERIAL PRIMARY KEY,
    department_id INTEGER REFERENCES departments(id),
    name VARCHAR(150) NOT NULL,
    code VARCHAR(20),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица корпусов
CREATE TABLE buildings (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица аудиторий
CREATE TABLE classrooms (
    id SERIAL PRIMARY KEY,
    building_id INTEGER REFERENCES buildings(id),
    number VARCHAR(20) NOT NULL,
    capacity INTEGER,
    type room_type NOT NULL,
    equipment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица временных слотов
CREATE TABLE time_slots (
    id SERIAL PRIMARY KEY,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    slot_number INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица учебных периодов
CREATE TABLE academic_periods (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    type period_type NOT NULL,
    academic_year VARCHAR(9) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица расписания
CREATE TABLE schedule (
    id SERIAL PRIMARY KEY,
    subject_id INTEGER REFERENCES subjects(id),
    teacher_id INTEGER REFERENCES teachers(id),
    group_id INTEGER REFERENCES groups(id),
    classroom_id INTEGER REFERENCES classrooms(id),
    time_slot_id INTEGER REFERENCES time_slots(id),
    academic_period_id INTEGER REFERENCES academic_periods(id),
    day_of_week weekday NOT NULL,
    class_type class_type NOT NULL,
    is_remote BOOLEAN DEFAULT FALSE,
    remote_link VARCHAR(255),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица замен в расписании
CREATE TABLE schedule_changes (
    id SERIAL PRIMARY KEY,
    schedule_id INTEGER REFERENCES schedule(id),
    change_date DATE NOT NULL,
    new_teacher_id INTEGER REFERENCES teachers(id),
    new_classroom_id INTEGER REFERENCES classrooms(id),
    new_time_slot_id INTEGER REFERENCES time_slots(id),
    is_cancelled BOOLEAN DEFAULT FALSE,
    reason TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание индексов для оптимизации запросов
CREATE INDEX idx_schedule_date ON schedule(start_date, end_date);
CREATE INDEX idx_schedule_group ON schedule(group_id);
CREATE INDEX idx_schedule_teacher ON schedule(teacher_id);
CREATE INDEX idx_schedule_classroom ON schedule(classroom_id);
CREATE INDEX idx_changes_date ON schedule_changes(change_date);

-- Создание триггеров для автоматического обновления updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Применение триггеров ко всем таблицам
CREATE TRIGGER update_faculties_updated_at BEFORE UPDATE ON faculties FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_departments_updated_at BEFORE UPDATE ON departments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_teachers_updated_at BEFORE UPDATE ON teachers FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_programs_updated_at BEFORE UPDATE ON programs FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_groups_updated_at BEFORE UPDATE ON groups FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_subjects_updated_at BEFORE UPDATE ON subjects FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_buildings_updated_at BEFORE UPDATE ON buildings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_classrooms_updated_at BEFORE UPDATE ON classrooms FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_time_slots_updated_at BEFORE UPDATE ON time_slots FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_academic_periods_updated_at BEFORE UPDATE ON academic_periods FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_schedule_updated_at BEFORE UPDATE ON schedule FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_schedule_changes_updated_at BEFORE UPDATE ON schedule_changes FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Создание представления для текущего расписания
CREATE OR REPLACE VIEW current_schedule AS
SELECT 
    s.id,
    sub.name AS subject_name,
    CONCAT(t.last_name, ' ', t.first_name, ' ', COALESCE(t.middle_name, '')) AS teacher_name,
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
WHERE CURRENT_DATE BETWEEN s.start_date AND s.end_date;

-- Комментарии к таблицам
COMMENT ON TABLE faculties IS 'Факультеты СПбГУ';
COMMENT ON TABLE departments IS 'Кафедры факультетов';
COMMENT ON TABLE teachers IS 'Преподаватели';
COMMENT ON TABLE programs IS 'Образовательные программы';
COMMENT ON TABLE groups IS 'Учебные группы';
COMMENT ON TABLE subjects IS 'Учебные дисциплины';
COMMENT ON TABLE buildings IS 'Учебные корпуса';
COMMENT ON TABLE classrooms IS 'Аудитории';
COMMENT ON TABLE time_slots IS 'Временные слоты занятий';
COMMENT ON TABLE academic_periods IS 'Учебные периоды';
COMMENT ON TABLE schedule IS 'Основное расписание занятий';
COMMENT ON TABLE schedule_changes IS 'Изменения в расписании';
