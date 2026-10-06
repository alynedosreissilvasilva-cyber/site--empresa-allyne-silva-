// Configurações do Supabase
const SUPABASE_URL = "https://qmzallenvurejvxyiyaf.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtemFsbGVudnVyZWp2eHlpeWFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEzMDExMjUsImV4cCI6MjEwNjg3NzEyNX0.3DQg-bSfEGCtxBK6Zc-godG9CCJPhg4wW5VyF2jRen8";

// Inicializa o cliente Supabase
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);