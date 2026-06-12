# Pepewebtech / Pepetech — Stack Plan & PRD

> **Version**: 1.0 — June 2026
> **Author**: Pepebot2 (Hermes Agent)
> **Status**: DRAFT — awaiting approval

---

## 1. Vision & Business Model

### Pepewebtech (Agency)
Small business web dev agency in Southern California. Websites, SEO, AI adoption for SMBs.
- Services pages, portfolio, blog (SEO content marketing)
- Lead generation → client conversion

### Pepetech (Affiliate + Directory)
Product/service recommendation engine monetized via affiliate links.
- Category directory (tools, software, hardware, services for SMBs)
- Pinterest integration for traffic acquisition
- Review content, comparison posts, roundups
- Affiliate revenue as primary monetization

---

## 2. Hardware Profile

| Component | Spec |
|-----------|------|
| CPU | AMD Ryzen 5 5600X (6-core) |
| GPU | AMD 0x7590 — 16GB VRAM (ROCm 7.13) |
| RAM | 32GB DDR4 |
| OS | Linux 6.17 (kernel) |
| PyTorch | 2.10.0.dev+rocm6.3 (ROCm-native in ComfyUI venv) |
| ComfyUI | v0.24.0, running on :8188, --lowvram |

---

## 3. Local-First Media Stack

### Core Principle
**ALL images, audio, music, SFX, voices, 3D assets = LOCAL generation.**
**VIDEO = cloud only** (no local video gen).

### 3.1 Image Generation (LOCAL — ComfyUI + Z-Image-Turbo)

**Primary: Z-Image-Turbo** (Alibaba Tongyi-MAI, 6B params)
- 8-step sampling, sub-second on fast GPUs, comfortable on 16GB VRAM
- Photorealistic, bilingual EN/CN text rendering
- Files already downloaded (20GB):
  - `text_encoders/qwen_3_4b.safetensors` (7.5GB)
  - `diffusion_models/z_image_turbo_bf16.safetensors` (12GB)
  - `vae/ae.safetensors` (320MB)
- Official ComfyUI workflow: `image_z_image_turbo.json`
- ControlNet: `Z-Image-Turbo-Fun-Controlnet-Union.safetensors`

**Fallback: ZAI glm-image** (cloud, $0.015/image)

**TO DO:**
- [ ] Verify Z-Image-Turbo workflow runs on ROCm AMD GPU
- [ ] Download ControlNet model
- [ ] Smoke test: generate sample image
- [ ] Create Hermes skill for Z-Image-Turbo image generation workflow

### 3.2 Audio Generation (LOCAL)

| Tool | Version | Purpose |
|------|---------|---------|
| Chatterbox V3 | 0.1.7 | TTS voices, voice cloning, 23+ languages |
| Edge TTS | default | Quick TTS (current) |
| AudioCraft | NOT YET INSTALLED | Music generation, sound effects |

**TO DO:**
- [ ] Install AudioCraft (`pip install audiocraft`)
- [ ] Test Chatterbox V3 voice generation
- [ ] Create Hermes skill for local audio generation

### 3.3 Speech-to-Text (LOCAL)

| Tool | Version | Purpose |
|------|---------|---------|
| faster-whisper | 1.2.1 | Fast transcription |
| whisper-timestamped | 1.15.9 | Word-level timestamps (video editing) |

### 3.4 Video Generation (CLOUD ONLY)

| Model | Provider | Price | Specs |
|-------|----------|-------|-------|
| CogVideoX-3 | ZAI | $0.2/video | Up to 4K, 30/60fps, text/image/start-end frame |
| grok-imagine-video | xAI | TBD | Secondary option |

### 3.5 3D Assets (LOCAL — ComfyUI)

- Via ComfyUI custom nodes (existing: LTXVideo, CogVideoXWrapper, ZhipuAI)
- Blender MCP integration for importing/arranging 3D assets
- Polyhaven + Sketchfab for asset libraries

### 3.6 Vision/Analysis (MCP — ZAI)

**NOT a local model — uses ZAI MCP server (@z_ai/mcp-server) with GLM-4.6V**

Tools available:
- `image_analysis` — general image understanding
- `video_analysis` — video content understanding
- `ui_to_artifact` — UI → code/prompts/specs
- `extract_text_from_screenshot` — OCR
- `diagnose_error_screenshot` — error analysis
- `understand_technical_diagram` — architecture/flow/UML diagrams
- `analyze_data_visualization` — charts/dashboards
- `ui_diff_check` — visual regression testing

---

## 4. Software Stack

### 4.1 Hermes Agent Infrastructure

| Profile | Model | Provider | Purpose |
|---------|-------|----------|---------|
| pepebot2 | GLM-5-turbo | ZAI | Main agent |
| ceo | GLM-5.1 | ZAI | Executive decisions |
| strategist | GLM-5.1 | ZAI | Strategy/planning |
| researcher | GLM-5.1 | ZAI | Deep research |
| content | GLM-5-turbo | ZAI | Content creation |
| ugc-pipeline | GLM-5.1 | ZAI | UGC content |
| coo | GLM-5-turbo | ZAI | Operations |
| creative | GLM-5-turbo | ZAI | Creative work |
| watchdog | GLM-5-turbo | ZAI | Health monitoring |
| triage | GLM-5-turbo | ZAI | Request triage |
| auto | GLM-5-turbo | ZAI | Automation |

**All cron jobs use GLM-5-turbo** (cost optimization).

**LFM: ZERO references across all 15 profiles.** ✅

**Obsidian: Enabled on all 9 important profiles.** ✅

### 4.2 Cron Jobs (4 active)

| Job | Schedule | Next Run |
|-----|----------|----------|
| Morning Brief | Daily 8am | Jun 13 |
| Blog Pipeline | Tue/Thu/Sat 10am | Jun 13 |
| Opportunity Scanner | Every 4h | Today |
| Health Check | Every 6h (no-agent script) | Today |

### 4.3 Pepewebtech Website

- **Framework**: Next.js 14
- **Location**: `~/pepewebtech-website`
- **Blog Posts**: 9 existing
- **Live**: pepewebtech.com (HTTP 200) ✅
- **Uncommitted changes**: 4 modified files

---

## 5. Pepetech — Affiliate + Directory Platform

### 5.1 Concept
A curated directory of tools, software, and services for small businesses, monetized through affiliate links and driven by Pinterest traffic.

### 5.2 Content Types
1. **Tool Reviews** — In-depth reviews of SaaS, hardware, AI tools
2. **Comparison Posts** — "X vs Y" format (high SEO value)
3. **Roundups** — "Top 10 X for Y" (affiliate link density)
4. **Category Pages** — Directory taxonomy (AI Tools, Web Hosting, SEO, etc.)
5. **Pinterest Pins** — Visual content driving traffic to directory pages

### 5.3 Tech Approach (TBD — needs deeper PRD)
- [ ] Next.js site or subdirectory of pepewebtech?
- [ ] Affiliate link management (direct vs. platform like ShareASale, Impact)
- [ ] Pinterest automation workflow (Pin creation, scheduling)
- [ ] SEO strategy for directory pages
- [ ] Content pipeline (automated vs. manual)

### 5.4 Revenue Model
- **Primary**: Affiliate commissions (CPA/CPS)
- **Secondary**: Sponsored listings (premium directory placement)
- **Tertiary**: Display ads (future)

---

## 6. Implementation Phases

### Phase 1: Z-Image-Turbo Local Gen (THIS WEEK)
1. Verify Z-Image-Turbo workflow on AMD ROCm GPU
2. Download ControlNet model
3. Smoke test: generate sample images
4. Create ComfyUI workflow skill for Hermes
5. Integrate image gen into content pipeline (blog hero images)

### Phase 2: Audio Stack Completion
1. Install AudioCraft for music/SFX
2. Test Chatterbox V3 voice cloning
3. Create audio gen skill for Hermes
4. Integrate into content pipeline (podcast intros, ad audio)

### Phase 3: Pepetech Affiliate Directory Build
1. Build directory framework (Next.js pages, category taxonomy)
2. First 10 tool reviews with affiliate links
3. Pinterest account setup + pin templates
4. Pinterest automation workflow
5. SEO strategy for directory pages
6. Design: hero, category pages, review layout, comparison tables


### Phase 4: Automation & Growth
1. Content pipeline: auto-generate + auto-publish affiliate content
2. Opportunity Scanner cron: surface new affiliate programs/tools
3. Social media automation (Pinterest + X)
4. SEO monitoring + reporting

---

## 7. Open Questions

- [ ] Pepetech: standalone domain or pepewebtech.com/directory?
- [ ] Affiliate networks: which ones to join first?
- [ ] Pinterest: business account setup needed?
- [ ] AudioCraft compatible with AMD ROCm?
- [ ] Z-Image-Turbo ROCm performance vs CUDA?
- [ ] Budget for cloud video gen (CogVideoX-3)?
- [ ] Pepetech content: English-only or bilingual (Spanglish)?

---

## 8. Risk Register

| Risk | Impact | Mitigation |
|------|--------|------------|
| AMD ROCm compatibility issues | Z-Image-Turbo may not work on ROCm | Test first; fallback to ZAI glm-image cloud |
| AudioCraft ROCm issues | Music gen may not work | Test; fallback to cloud or CPU inference |
| 16GB VRAM limit | Large models may OOM | Use --lowvram, GGUF quantized models |
| Pepetech SEO competition | Directory niche is crowded | Focus on micro-niches, Spanglish content |
| Affiliate link policies | Some programs reject new sites | Build traffic first, apply later |
