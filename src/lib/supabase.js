import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pcmrbmiybjsykmyweryt.supabase.co'
const supabaseKey = 'sb_publishable_oVlB07waGi5PW_QgPprAOg_QJ6fXfSA'

export const supabase = createClient(supabaseUrl, supabaseKey)