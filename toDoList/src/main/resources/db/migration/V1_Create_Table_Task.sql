CREATE TABLE task_tb (
  id binary(16) NOT NULL,
  create_date datetime(6) NOT NULL,
  description varchar(255) NOT NULL,
  done bit(1) NOT NULL,
  task_name varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci