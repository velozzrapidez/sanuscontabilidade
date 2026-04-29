-- Tabela de Serviços
CREATE TABLE public.servicos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  descricao text
);

-- Habilitar RLS para serviços
ALTER TABLE public.servicos ENABLE ROW LEVEL SECURITY;

-- Políticas para serviços (Leitura pública, edição restrita)
CREATE POLICY "Serviços são visíveis para todos"
ON public.servicos FOR SELECT
TO public
USING (true);

-- Tabela de Empresas
CREATE TABLE public.empresas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  nome text NOT NULL,
  cnpj text UNIQUE,
  tipo_empresa text,
  problema_fiscal boolean DEFAULT false,
  data_abertura date,
  contato_whatsapp text,
  email text,
  endereco text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Habilitar RLS para empresas
ALTER TABLE public.empresas ENABLE ROW LEVEL SECURITY;

-- Políticas de RLS para empresas
-- Usuários podem ver suas próprias empresas
CREATE POLICY "Usuários veem suas próprias empresas"
ON public.empresas FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Usuários podem inserir suas próprias empresas
CREATE POLICY "Usuários podem inserir suas empresas"
ON public.empresas FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Usuários podem atualizar suas próprias empresas
CREATE POLICY "Usuários podem atualizar suas empresas"
ON public.empresas FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

-- Trigger para atualizar o updated_at automaticamente
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_empresas_updated
  BEFORE UPDATE ON public.empresas
  FOR EACH ROW
  EXECUTE PROCEDURE public.handle_updated_at();
