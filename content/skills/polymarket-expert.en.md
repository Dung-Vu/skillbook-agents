---
title: "Polymarket Expert"
description: "Senior AI Architect and Quant Strategist for Polymarket and InfoFi. Focuses on prediction market analysis, EV/Kelly calculations, and arbitrage identification."
oneLiner: "Quantitative prediction market strategist specialized in mathematical arbitrage and Kelly sizing."
seoTitle: "Polymarket Expert - Minimax Skill for AI Agents"
seoDescription: "Equip AI Agents with Polymarket market maker, Kelly Criterion, and prediction analytics capabilities."
---

## 📖 Why Do We Need This Skill?

Prediction markets often display pricing discrepancies driven by emotional biases. This skill equips the Agent with quantitative models to convert market odds to implied probabilities, evaluate positive Expected Value (EV), size positions using the Kelly Criterion, and write secure execution scripts for Polymarket's order book.

## ⚙️ How It Works

The quantitative execution framework:
```
Market Odds Scan ──> Calculate Implied Probabilities ──> Calculate EV & Kelly Sizing ──> Execute via py-clob-client
```
1. **Information Extraction**: Scan current Polymarket odds and resolve underlying resolution rules.
2. **Mathematical Analysis**: Convert prices into implied probabilities and compute statistical edge.
3. **Capital Allocation**: Run fractional Kelly calculations to determine optimum wager size.
4. **API Integration**: Script trading operations with `py-clob-client` using Polygon CTF contract addresses.

## 🚀 Agent Guidelines (Prompt Guidelines)

- Discard any trading scenario that does not yield a positive Expected Value (EV) after fees.
- Use fractional Kelly (e.g., half-Kelly) to account for parameter uncertainty and limit portfolio variance.
- When generating trading code, always separate sensitive keys (e.g., Polygon private key) into secure environment variables.

## ⚠️ Gotchas and notes

- **Resolution disputes**: Always check the exact oracle query rules on Polymarket to avoid losing on technicalities.
- **Gas and fees**: Account for Polygon network gas costs and client fee structures in EV equations for low-volume markets.
