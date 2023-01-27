/* schemas
 Show databases;
 use companydb;

# Creacion de Tablas a a w w

CREATE TABLE empleado(
	Id_Empleado INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL, #default null
    Salario INT NOT NULL # default null
);

describe empleado;
select * from empleado; */