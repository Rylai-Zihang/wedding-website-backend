#!/bin/bash
set -e
export PGPASSWORD=$POSTGRES_PASSWORD;
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE DATABASE $APP_DB_NAME;
  GRANT ALL PRIVILEGES ON DATABASE $APP_DB_NAME TO $POSTGRES_USER;
  \connect $APP_DB_NAME $POSTGRES_USER
  BEGIN;
    CREATE TABLE IF NOT EXISTS guests (
        id BIGSERIAL NOT NULL PRIMARY KEY,                                                                                                                                                
        name VARCHAR(50) NOT NULL,                                                                                                                                                        
        phone TEXT,                                                                                                                                                                       
        extras INTEGER,                                                                                                                                                                  
        need_accommodation BOOLEAN
	);
  COMMIT;
EOSQL