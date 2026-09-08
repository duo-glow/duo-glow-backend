const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn("Advertencia: SUPABASE_URL o SUPABASE_ANON_KEY no están configuradas");
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;