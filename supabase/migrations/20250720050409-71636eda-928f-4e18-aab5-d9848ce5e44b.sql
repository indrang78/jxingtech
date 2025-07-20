-- Update the images bucket to be public
UPDATE storage.buckets 
SET public = true 
WHERE id = 'images';

-- Create storage policies to allow public access to images
CREATE POLICY "Allow public access to images" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'images');

CREATE POLICY "Allow public uploads to images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'images');