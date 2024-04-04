import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://rtmpcyelfvygdmfhmrmf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0bXBjeWVsZnZ5Z2RtZmhtcm1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1NjQ0NzUsImV4cCI6MjAyNzE0MDQ3NX0.3hlfWgQBlDsWMsLlttw6F7vZI582Klal8itO13qwJsA'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;