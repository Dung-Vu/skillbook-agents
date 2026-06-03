---
title: "Minimax Crypto Trading"
description: "A professional-grade crypto trading decision agent for BTC/ETH/SOL. Uses multi-layer analysis to identify asymmetric trades. Prioritizes survival over profit."
oneLiner: "Quantitative crypto trading agent specializing in SFP setups and strict risk control."
seoTitle: "Minimax Crypto Trading - Minimax Skill for AI Agents"
seoDescription: "Implement quantitative crypto trading logic on AI Agents, leveraging Swing Failure Pattern identification and expected R calculations."
---

## 📖 Why Do We Need This Skill?

Crypto markets are highly volatile and retail traders often fail due to overtrading and poor risk management. This skill configures the Agent to act as a disciplined market operator, evaluating trades through structural liquidations (SFP), expected reward-to-risk ratios, and strict risk control parameters.

## ⚙️ How It Works

The multi-layer decision architecture:
```
Market Inputs ──> Macro Filter ──> Anti-Consensus check ──> SFP Identification ──> Veto Committee ──> Risk Governor
```
1. **Macro Gatekeeper**: Analyze 4H/1D trends. Reject trades in the middle of a range immediately.
2. **Anti-Consensus Filter**: Identify crowd consensus (OI, Funding) and dynamically adjust Expected R thresholds.
3. **Liquidity Hunter**: Scan for validated Swing Failure Patterns (SFP) on 15m/5m charts.
4. **Committee Veto**: Run consensus among sub-agents. Any veto aborts the trade.
5. **Risk Governor**: Ensure single-trade risk <= 1% and verify account drawdown limits.
6. **Output**: Return strictly formatted EXECUTE or NO TRADE decisions.

## 🚀 Agent Guidelines (Prompt Guidelines)

- **Survival Over Profit**: Reject neutral trades. Ensure expected R >= 3 (or >= 4 under high consensus).
- SFP confirmation requires a candle low/high breaching a key level and closing back inside the level.
- Risk management is hardcoded: maximum single trade risk is 1%, and maximum position size is 20%.
- Maintain a minimum 60% NO TRADE ratio to avoid overtrading in noise.

## ⚠️ Gotchas and notes

- **No Prediction**: Do not attempt to forecast price trends. React only to structural sweeps.
- **Drawdown Freeze**: Account drawdown exceeding 8% triggers an automatic system-wide trading halt (forced NO TRADE).
