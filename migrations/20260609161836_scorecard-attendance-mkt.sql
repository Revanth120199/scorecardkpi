-- Scorecard: Attendance Data
CREATE TABLE IF NOT EXISTS scorecard_attendance (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  store_id      text NOT NULL,
  month         text NOT NULL,
  attended      boolean NOT NULL DEFAULT true,
  updated_at    timestamptz NOT NULL DEFAULT now(),
  updated_by    text,
  UNIQUE (store_id, month)
);

-- Scorecard: MKT Data
CREATE TABLE IF NOT EXISTS scorecard_mkt_data (
  id                uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  store_id          text NOT NULL,
  month             text NOT NULL,
  olo_rank          integer NOT NULL DEFAULT 1,
  promos_missed     integer NOT NULL DEFAULT 0,
  lsm_pct           numeric(5,2) NOT NULL DEFAULT 0,
  loyalty_pct       numeric(5,2) NOT NULL DEFAULT 0,
  social_issues     integer NOT NULL DEFAULT 0,
  review_five_stars integer NOT NULL DEFAULT 0,
  updated_at        timestamptz NOT NULL DEFAULT now(),
  updated_by        text,
  UNIQUE (store_id, month)
);

-- Indexes for fast store/month lookups
CREATE INDEX IF NOT EXISTS idx_scorecard_att_store_month ON scorecard_attendance (store_id, month);
CREATE INDEX IF NOT EXISTS idx_scorecard_mkt_store_month ON scorecard_mkt_data   (store_id, month);

-- RLS: enable and allow full access for anon (scorecard is internal tool)
ALTER TABLE scorecard_attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE scorecard_mkt_data   ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon full access attendance"
  ON scorecard_attendance FOR ALL TO anon USING (true) WITH CHECK (true);

CREATE POLICY "anon full access mkt"
  ON scorecard_mkt_data FOR ALL TO anon USING (true) WITH CHECK (true);
