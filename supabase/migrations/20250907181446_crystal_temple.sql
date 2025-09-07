/*
  # Initial Schema for SJP Variant Enterprises

  1. New Tables
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text, unique)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    - `products`
      - `id` (uuid, primary key)
      - `name` (text)
      - `sku` (text, unique)
      - `size` (text)
      - `category_id` (uuid, foreign key)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access
    - Add policies for authenticated users to manage data

  3. Initial Data
    - Pre-populate categories and products as specified
*/

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  sku text UNIQUE NOT NULL,
  size text NOT NULL,
  category_id uuid NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create policies for categories
CREATE POLICY "Categories are viewable by everyone"
  ON categories
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Categories are manageable by authenticated users"
  ON categories
  FOR ALL
  TO authenticated
  USING (true);

-- Create policies for products
CREATE POLICY "Products are viewable by everyone"
  ON products
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Products are manageable by authenticated users"
  ON products
  FOR ALL
  TO authenticated
  USING (true);

-- Insert initial categories
INSERT INTO categories (name) VALUES
  ('HALDIRAM'),
  ('LSPT'),
  ('EVERGREEN'),
  ('GULAAB'),
  ('BHAAJI BOXES'),
  ('DRY FRUIT'),
  ('CHOCOLATE')
ON CONFLICT (name) DO NOTHING;

-- Insert initial products
INSERT INTO products (name, sku, size, category_id) VALUES
  -- HALDIRAM products
  ('HR 1KG Plain', 'SJP-HR01', '184.15 x 304.8 (MM)', (SELECT id FROM categories WHERE name = 'HALDIRAM')),
  ('HR 1KG 4 LINE', 'SJP-HR02', '184.15 x 304.8 (MM)', (SELECT id FROM categories WHERE name = 'HALDIRAM')),
  ('HR 800GM 4 LINE', 'SJP-HR03', '184.15 x 304.8 (MM)', (SELECT id FROM categories WHERE name = 'HALDIRAM')),
  ('HR 800GM 4 LINE (Second Variant)', 'SJP-HR04', '184.15 x 304.8 (MM)', (SELECT id FROM categories WHERE name = 'HALDIRAM')),
  ('HR 18 LADDOO', 'SJP-HR05', '184.15 x 304.8 (MM)', (SELECT id FROM categories WHERE name = 'HALDIRAM')),
  ('HR 6 LINE', 'SJP-HR06', '184.15 x 304.8 (MM)', (SELECT id FROM categories WHERE name = 'HALDIRAM')),
  ('HR 1 KATORA 4 LINE', 'SJP-HR07', '184.15 x 304.8 (MM)', (SELECT id FROM categories WHERE name = 'HALDIRAM')),
  ('HR 2 KATORA 4 LINE', 'SJP-HR08', '184.15 x 304.8 (MM)', (SELECT id FROM categories WHERE name = 'HALDIRAM')),
  ('HR 2+4 LINE', 'SJP-HR09', '184.15 x 304.8 (MM)', (SELECT id FROM categories WHERE name = 'HALDIRAM')),
  
  -- LSPT products
  ('LSPT 4 LINE', 'SJP-LL01', '184.15 x 266.7 (MM)', (SELECT id FROM categories WHERE name = 'LSPT')),
  ('LSPT 1 KATORA 4 LINE', 'SJP-LL02', '184.15 x 266.7 (MM)', (SELECT id FROM categories WHERE name = 'LSPT')),
  
  -- EVERGREEN products
  ('EVG 500 GM', 'SJP-EE01', '190.5 x 184.15 (MM)', (SELECT id FROM categories WHERE name = 'EVERGREEN')),
  ('EVG 1 KG', 'SJP-EE02', '184.15 x 266.7 (MM)', (SELECT id FROM categories WHERE name = 'EVERGREEN')),
  
  -- GULAAB products
  ('GL 1 KG', 'SJP-GG01', '177.8 x 266.7 (MM)', (SELECT id FROM categories WHERE name = 'GULAAB')),
  ('GL 800 GM', 'SJP-GG02', '184.15 x 215.9 (MM)', (SELECT id FROM categories WHERE name = 'GULAAB')),
  ('GL 500 GM', 'SJP-GG03', '160.02 X 203.2 (MM)', (SELECT id FROM categories WHERE name = 'GULAAB')),
  ('GL 250 GM', 'SJP-GG04', '127 X 152.4 (MM)', (SELECT id FROM categories WHERE name = 'GULAAB')),
  
  -- BHAAJI BOXES products
  ('50 MM (Depth) 4 KHANA', 'SJP-BH01', '203.2 x 203.2 (MM)', (SELECT id FROM categories WHERE name = 'BHAAJI BOXES')),
  ('40 MM (Depth) 4 KHANA', 'SJP-BH02', '228.6 x 228.6 (MM)', (SELECT id FROM categories WHERE name = 'BHAAJI BOXES')),
  ('9x13 2+2', 'SJP-BH03', '228.6 x 330.2 (MM)', (SELECT id FROM categories WHERE name = 'BHAAJI BOXES')),
  ('9x13 4 LINE', 'SJP-BH04', '228.6 x 330.2 (MM)', (SELECT id FROM categories WHERE name = 'BHAAJI BOXES')),
  ('9x13 6 KHANA', 'SJP-BH05', '228.6 x 330.2 (MM)', (SELECT id FROM categories WHERE name = 'BHAAJI BOXES')),
  ('11x11 5 KHANA', 'SJP-BH06', '279.4 x 279.4 (MM)', (SELECT id FROM categories WHERE name = 'BHAAJI BOXES')),
  ('11x11 6 KHANA', 'SJP-BH07', '279.4 x 279.4 (MM)', (SELECT id FROM categories WHERE name = 'BHAAJI BOXES')),
  ('11x11 7 KHANA', 'SJP-BH08', '279.4 x 279.4 (MM)', (SELECT id FROM categories WHERE name = 'BHAAJI BOXES')),
  ('11x14 6 KHANA', 'SJP-BH09', '279.4 x 355.6 (MM)', (SELECT id FROM categories WHERE name = 'BHAAJI BOXES')),
  ('11x14 7 KHANA', 'SJP-BH10', '279.4 x 355.6 (MM)', (SELECT id FROM categories WHERE name = 'BHAAJI BOXES')),
  ('11x14 8 KHANA', 'SJP-BH11', '279.4 x 355.6 (MM)', (SELECT id FROM categories WHERE name = 'BHAAJI BOXES')),
  ('11x14 10 KHANA', 'SJP-BH12', '279.4 X 355.6 (MM)', (SELECT id FROM categories WHERE name = 'BHAAJI BOXES')),
  ('11x14 11 KHANA', 'SJP-BH13', '279.4 x 355.6 (MM)', (SELECT id FROM categories WHERE name = 'BHAAJI BOXES')),
  
  -- DRY FRUIT products
  ('4 KHANA', 'SJP-DF01', '254 x 254 (MM)', (SELECT id FROM categories WHERE name = 'DRY FRUIT')),
  ('5 KHANA', 'SJP-DF02', '254 x 254 (MM)', (SELECT id FROM categories WHERE name = 'DRY FRUIT')),
  ('6 KHANA', 'SJP-DF03', '254 x 304.8 (MM)', (SELECT id FROM categories WHERE name = 'DRY FRUIT')),
  
  -- CHOCOLATE products
  ('96 CAVITY', 'SJP-CH01', '393.7 x 584.2 (MM)', (SELECT id FROM categories WHERE name = 'CHOCOLATE'))
ON CONFLICT (sku) DO NOTHING;