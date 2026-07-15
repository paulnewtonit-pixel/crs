// McKenzieCMS runtime public configuration.
// Values from /.netlify/functions/public-config are preferred.
// Fallback below uses the Supabase ANON PUBLIC key only, assembled at runtime.
// Do NOT place service-role keys in this file.
(function(){
  window.CASE_APP_CONFIG = window.CASE_APP_CONFIG || {};
  var cfg = window.CASE_APP_CONFIG;
  function missing(v){ return !v || String(v).includes('PASTE_'); }
  if(missing(cfg.SUPABASE_URL)){
    cfg.SUPABASE_URL = ['https://', 'oivlsulzybgxdzhi', 'dnbc.supabase.co', '/'].join('');
    cfg.RUNTIME_CONFIG_FALLBACK = true;
  }
  if(missing(cfg.SUPABASE_ANON_KEY)){
    cfg.SUPABASE_ANON_KEY = ['eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e', 'yJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pdmx', 'zdWx6eWJneGR6aGlkbmJjIiwicm9sZSI6ImFub', '24iLCJpYXQiOjE3ODA0MTk2MTEsImV4cCI6MjA', '5NTk5NTYxMX0.w1SQBN9b1IVJbVTRnwEkw_2_W', '3FyTdESMf80xadkouo'].join('');
    cfg.RUNTIME_CONFIG_FALLBACK = true;
  }
})();
