-- Ejecuta esto en Supabase > SQL Editor
create table if not exists recetas (
  id bigint generated always as identity primary key,
  nombre text not null unique,
  emoji text, cocina text, minutos int, dificultad text,
  tags text default '',            -- a = arma la tuya, s = una sartén, q = rápida
  ingredientes jsonb not null,     -- [[cantidad, "unidad", "nombre"], ...]
  pasos jsonb not null,            -- ["paso 1", "paso 2", ...]
  consejo text,
  imagen text,                     -- URL de la foto (opcional)
  creada timestamptz default now()
);
create table if not exists estado (clave text primary key, valor jsonb);

alter table recetas enable row level security;
alter table estado enable row level security;
create policy "leer recetas" on recetas for select using (true);
create policy "agregar recetas" on recetas for insert with check (true);
create policy "leer estado" on estado for select using (true);
create policy "crear estado" on estado for insert with check (true);
create policy "actualizar estado" on estado for update using (true) with check (true);
