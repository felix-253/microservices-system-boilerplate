# Employees Dataset (PostgreSQL Version)

## 📌 Description

This dataset is based on the sample database provided here:

https://github.com/winstonjs/winston

The `employees.sql` file in this repository is a migrated version of that dataset, converted from MySQL (MariaDB) to PostgreSQL using pgloader.

It can be used to:

- Test microservices architectures
- Benchmark database performance
- Simulate large-scale relational data
- Test logging systems
- Practice query optimization
- Practice data migration (MySQL → PostgreSQL)

The dataset contains:

- ~3.9 million records
- Multiple relational tables
- Primary keys, foreign keys, indexes
- Realistic HR-style structured data

---

## 📂 Database Structure

Main tables:

- employees
- salaries
- titles
- departments
- dept_emp
- dept_manager

---

## 🚀 How to Use

### 1️⃣ Create a PostgreSQL database

```bash
createdb employees
```

and run
docker exec -i ms_postgres \
 psql -Upostgres -dpostgres postgre \  
 < employees.sql
