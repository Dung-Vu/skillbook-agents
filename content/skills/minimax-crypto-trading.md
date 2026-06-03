---
slug: minimax-crypto-trading
title: Minimax Crypto Trading
command: ''
category: reasoning-planning
tags:
  - crypto
  - trading
  - quant
  - risk-management
  - btc
  - eth
complexity: expert
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
featured: false
description: >-
  Agent quyết định giao dịch tiền mã hóa chuyên nghiệp cho BTC/ETH/SOL. Sử dụng
  hệ thống phân tích đa tầng để xác định cơ hội giao dịch bất đối xứng và ưu
  tiên bảo toàn vốn.
oneLiner: Đưa ra quyết định giao dịch BTC/ETH/SOL ưu tiên quản trị rủi ro.
sourceUrl: ''
sourceAuthor: Minimax
lastVerified: '2026-06-03'
relatedSkills:
  - polymarket-expert
  - topic-tracker
  - sales-power-map
seoTitle: Minimax Crypto Trading - Minimax Skill for AI Agents
seoDescription: >-
  Cấu hình AI Agent tự động phân tích kỹ thuật, phát hiện SFP (Swing Failure
  Pattern) và quản lý rủi ro tài khoản trading BTC/ETH/SOL.
provider: minimax
---

## 📖 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?

Thị trường tiền mã hóa biến động cực kỳ mạnh mẽ và phần lớn các bot trading thua lỗ do cố gắng dự đoán giá hoặc giao dịch quá mức. Kỹ năng này lập trình Agent hoạt động như một nhà quản trị rủi ro kỷ luật, chỉ ra quyết định giao dịch khi có sự hội tụ của nhiều yếu tố kỹ thuật và tỷ lệ lợi nhuận/rủi ro cực kỳ bất đối xứng, hướng tới mục tiêu tối thượng: Sống sót trong mọi điều kiện.

## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy

Kiến trúc hệ thống quyết định gồm 6 tầng:
```
Dữ liệu thị trường ──> Macro Gatekeeper ──> Anti-Consensus Filter ──> SFP Liquidity Hunter ──> Committee Decision ──> Executor & Risk Governor
```
1. **Macro Gatekeeper (4H/1D)**: Đánh giá xu hướng vĩ mô. Từ chối giao dịch nếu thị trường không ở vùng biên hỗ trợ/kháng cự.
2. **Anti-Consensus Filter**: Đo lường sự đồng thuận đám đông để nâng điều kiện tỷ lệ Lợi nhuận/Rủi ro mong đợi (Expected R) khi đám đông quá phấn khích.
3. **Liquidity Hunter**: Chỉ tìm kiếm mô hình SFP (Swing Failure Pattern) tại các đỉnh/đáy lịch sử để vào lệnh.
4. **Committee Decision**: Các Agent thành viên (Vĩ mô, Rủi ro, Thanh khoản) bỏ phiếu. Nếu một phiếu phủ quyết -> Hủy giao dịch.
5. **Minimax Executor**: Tính toán rủi ro và xác định Stop Loss chuẩn xác.
6. **Risk Governor**: Áp dụng các quy tắc giới hạn rủi ro tài khoản nghiêm ngặt.

## 🚀 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)

- **Nguyên tắc Sống sót là trên hết**: Giao dịch không lệnh (NO TRADE) được coi là một quyết định thành công. Luôn ưu tiên không mất tiền trước khi kiếm tiền.
- Chỉ chấp nhận giao dịch nếu Expected R đạt tối thiểu từ 3 trở lên (hoặc >= 4 nếu thị trường có sự đồng thuận quá cao).
- Tín hiệu kích hoạt duy nhất được phép để vào lệnh là Swing Failure Pattern (SFP) được xác nhận đóng nến ở khung thời gian nhỏ.
- Giới hạn rủi ro trên mỗi lệnh giao dịch tối đa là 1% tổng giá trị tài khoản.

## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)

- **Không dự báo tương lai**: Agent không được dự đoán giá đi về đâu mà chỉ phản ứng trước hành vi quét thanh khoản tại các vùng biên.
- **Trạng thái đóng băng**: Khi tài khoản sụt giảm (Drawdown) vượt quá 5%, hệ thống bắt buộc phải giảm tần suất giao dịch; vượt quá 8% sẽ khóa kích hoạt giao dịch hoàn toàn.
