# NIFTY ITM React/HTML UI

Mobile-first frontend for:
- NIFTY 50 SPOT
- 5-minute candles
- EMA 34
- RSI 14
- 1-strike ITM CE/PE
- Live position / P&L dashboard
- Risk settings
- Emergency stop

## Important

This is the frontend UI. It does NOT put Kotak credentials in the browser.

For real live trading, connect this frontend to a secure server-side API that handles:
1. Kotak Neo authentication
2. NIFTY live SFeed
3. 5-minute completed-candle creation
4. EMA34 + RSI14 calculation
5. Live option-chain/expiry lookup
6. 1-strike ITM contract selection
7. Real order placement
8. SL/target monitoring
9. Broker position reconciliation

Do not put MPIN, consumer key, TOTP secret, access tokens, or other broker secrets in `app.js`, HTML, React state, localStorage, or GitHub.

## Run

This is static HTML/JS and can be served by any static web server.

For example:
- GitHub Pages for UI only
- Netlify/Vercel/Cloudflare Pages for UI only

A secure backend is still required for real Kotak live trading.
