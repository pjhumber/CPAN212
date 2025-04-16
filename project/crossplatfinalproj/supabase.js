import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://spyokqewcfuzctsytwyo.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNweW9rcWV3Y2Z1emN0c3l0d3lvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2NzgyMzksImV4cCI6MjA2MDI1NDIzOX0.XKi_IfyJthw_nnNkBI5HU5IQPBxMmsaTQTAuRTSNj7E'
);
