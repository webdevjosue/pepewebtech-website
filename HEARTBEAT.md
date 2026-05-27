# HEARTBEAT.md — Engineer ⚙️

> Interval: every 120 minutes

## Proactive Tasks

### 1. Repository Health
- Run `git status` and `git log --oneline -10` to check recent activity
- Check for uncommitted changes, dangling branches
- Report any issues to main agent

### 2. Dependency Check
- Check `package.json` (if exists) for outdated dependencies
- Check for security vulnerabilities in node_modules
- Report outdated or vulnerable deps

### 3. Lint & Code Quality
- Run linters (if configured): `npx htmlhint`, `npx stylelint`, or similar
- Check for broken links, missing alt text, accessibility issues
- Validate HTML structure of key pages

### 4. Performance Opportunities
- Check image sizes and formats (webp vs png/jpg)
- Look for render-blocking resources
- Check Core Web Vitals opportunities (LCP, CLS, FID)
- Report top 3 performance improvements

### 5. Vercel Deployment Status
- Run `vercel list` or check Vercel dashboard for deployment status
- Verify www.pepewebtech.com is live and serving correctly
- Check for any build errors or failed deployments
- Report deployment health

### 6. System Health
- Check disk usage: `df -h`
- Check Docker state if applicable: `docker ps`
- Check memory: `free -h`
- Alert on critical resource usage

### 7. Broken Link Check
- Periodically run a link checker on key pages
- Look for 404s, redirect chains, dead external links
- Prioritize fixing internal broken links

## Reporting
- Keep a `SYSTEM_STATUS.md` in workspace with current state
- Flag critical issues (disk >80%, broken deploys, security vulns) immediately
- Routine status updates can wait for next heartbeat cycle

---

## Channel Routing

### Heartbeat Start Ping
When your heartbeat cycle starts, immediately post a one-liner to #heartbeat-log:
- Channel: Discord
- To: channel:1487342872478093332
- Message: `⚙️ Engineering heartbeat started`

When your cycle completes, post a summary update:
- Message: `✅ Engineering: [health status], [N] deps checked, [N] issues found`

### Primary Channel: #cron-jobs
- **Channel ID:** 1487342871769256068
- **When to post:** After completing all system/repo checks in a cycle
- **What to post:** Deployment status, disk alerts, dependency updates, system health

### Secondary Channel: #agent-status (critical issues only)
- **Channel ID:** 1487342872289087518
- **When to post:** ONLY for critical issues (disk >80%, deployment failures, security vulnerabilities)
- **Do NOT** post routine status updates here — those go to #cron-jobs

### How to Post to Discord
Use the message tool with the following format for routine updates:
```
Action: send
Channel: discord
To: channel:1487342871769256068
Message: |
  ⚙️ **Engineering Cycle — [YYYY-MM-DD HH:MM]**
  
  **Repo:** [clean/dirty] — [N] commits since last check
  **Deploy:** [✅ live / ❌ down] — last deploy [time]
  **Disk:** [N]% used — [OK/⚠️]
  **Deps:** [N] dependencies — [✅ up to date / ⚠️ N outdated]
  **Issues:** [none / N items — fix in progress]
```

For critical issues posting to #agent-status:
```
Action: send
Channel: discord
To: channel:1487342872289087518
Message: |
  🚨 **CRITICAL: [issue]**
  
  [Description of the problem and what's needed]
  
  **Severity:** [high/medium]
  **Action:** [what needs to happen]
```

### Posting Format
- **Header**: `⚙️ Engineering Cycle — date time`
- **Routine**: single-line status for each check (repo, deploy, disk, deps, issues)
- **Critical**: clear `🚨` prefix with description, severity, action needed
- **Max length**: 1000 characters for routine, 2000 for critical

---

## Channel Routing

### Heartbeat Start Ping
When your heartbeat cycle starts, immediately post a one-liner to #heartbeat-log:
- Channel: Discord
- To: channel:1487342872478093332
- Message: `⚙️ Engineering heartbeat started`

When your cycle completes, post a summary update:
- Message: `✅ Engineering: [health status], [N] deps checked, [N] issues found`

### Primary Channel: #cron-jobs
- **Channel ID:** 1487342871769256068
- **When to post:** After completing all system/repo checks in a cycle
- **What to post:** Deployment status, disk alerts, dependency updates, system health

### Secondary Channel: #agent-status (critical issues only)
- **Channel ID:** 1487342872289087518
- **When to post:** ONLY for critical issues (disk >80%, deployment failures, security vulnerabilities)
- **Do NOT** post routine status updates here — those go to #cron-jobs

### How to Post to Discord
Use the message tool with the following format for routine updates:
```
Action: send
Channel: discord
To: channel:1487342871769256068
Message: |
  ⚙️ **Engineering Cycle — [YYYY-MM-DD HH:MM]**
  
  **Repo:** [clean/dirty] — [N] commits since last check
  **Deploy:** [✅ live / ❌ down] — last deploy [time]
  **Disk:** [N]% used — [OK/⚠️]
  **Deps:** [N] dependencies — [✅ up to date / ⚠️ N outdated]
  **Issues:** [none / N items — fix in progress]
```

For critical issues posting to #agent-status:
```
Action: send
Channel: discord
To: channel:1487342872289087518
Message: |
  🚨 **CRITICAL: [issue]**
  
  [Description of the problem and what's needed]
  
  **Severity:** [high/medium]
  **Action:** [what needs to happen]
```

### Posting Format
- **Header**: `⚙️ Engineering Cycle — date time`
- **Routine**: single-line status for each check (repo, deploy, disk, deps, issues)
- **Critical**: clear `🚨` prefix with description, severity, action needed
- **Max length**: 1000 characters for routine, 2000 for critical
