# 🎬 Video Demo Script - KALE x Reflector Hackathon 2025
**Duration: 5 minutes maximum | Language: English**

## 📝 Script Structure

### **00:00-00:30 - Hook & Problem**
> "LATAM students can't safely learn DeFi by doing. They need a risk-free way to experience blockchain technology while supporting meaningful projects. That's why we built AhorroStellar."

**Visual**: Show landing page, highlight "Save with purpose. Vote for the future."

### **00:30-01:30 - Live Demo**
> "Let me show you how it works. First, I'll go to the stake page where students can vote with their savings."

**Actions**:
1. Navigate to `/stake`
2. Show "Simulate Connection" button
3. Click to simulate wallet connection
4. Show real-time price display: "USDC/USD: $1.0000, XLM/USD: $0.1200"
5. Select USDC, enter amount (e.g., 100)
6. Show USD equivalence calculation
7. Select a project and configure stake
8. Click "Votar con 100 USDC"
9. Show confirmation with updated statistics

**Key Points**:
- "Notice the real-time prices from Reflector Oracle"
- "Students can see exactly how much their stake is worth in USD"
- "The system updates project statistics immediately"

### **01:30-03:00 - Deep-Tech (Reflector Integration)**
> "The magic happens with Reflector Oracle integration. Let me show you the technical implementation."

**Actions**:
1. Navigate to `/reflector-debug`
2. Show the comprehensive debugging interface
3. Click "Test All Connections"
4. Show green checkmarks for all price feeds
5. Show contract IDs and configuration
6. Open browser console
7. Run: `await priceUSDCinUSD()`, `await usdPerCLP()`, `await priceXLMinUSD()`
8. Show actual price values in console

**Technical Points**:
- "We use SEP-40 compliant `simulateTransaction` for read-only access"
- "No wallet required - just a testnet account for reading"
- "Three Reflector contracts: USDC, FX, and CEX for comprehensive price data"
- "14 decimal precision for accurate calculations"
- "Graceful fallbacks when Oracle is unavailable"

### **03:00-04:00 - Composability with KALE**
> "This demonstrates true composability - building on existing Stellar infrastructure."

**Visual**: Show architecture diagram from README

**Points**:
- "Reflector provides the price feeds"
- "Our app provides the educational interface"
- "Future integration with KALE for proof-of-teamwork rewards"
- "Students earn reputation for backing successful projects"
- "Zero risk - funds always recoverable"

### **04:00-05:00 - Roadmap & Impact**
> "This is just the beginning. Here's our vision for LATAM students."

**Visual**: Show dashboard with reputation system

**Roadmap**:
- "Phase 2: Real Soroban contracts for on-chain staking"
- "Phase 3: University partnerships across LATAM"
- "Integration with KALE for teamwork-based rewards"
- "Marketplace for student projects"
- "Gamification with NFTs and achievements"

**Impact**:
- "Democratizing DeFi education in LATAM"
- "Safe, practical blockchain experience"
- "Supporting meaningful student projects"
- "Building the next generation of Web3 users"

## 🎥 Recording Tips

### **Screen Recording Setup**
- **Resolution**: 1920x1080 minimum
- **Frame Rate**: 30fps
- **Audio**: Clear narration, no background noise
- **Browser**: Chrome with developer tools ready

### **Demo Flow**
1. **Start with app running** (`npm run dev`)
2. **Have Reflector configured** (`.env.local` with testnet account)
3. **Test all features** before recording
4. **Keep console open** for technical demonstration
5. **Use clear, slow navigation** for judges to follow

### **Key Screenshots to Capture**
- Landing page with "Reflector Edition" branding
- `/stake` with real-time prices (not demo)
- `/reflector-debug` with all green checkmarks
- Browser console showing actual price values
- Dashboard with reputation system
- Architecture diagram from README

### **Technical Validation Points**
- ✅ Real prices from Reflector (not hardcoded)
- ✅ SEP-40 compliant implementation
- ✅ Read-only access (no signing required)
- ✅ Error handling with fallbacks
- ✅ Auto-refresh functionality
- ✅ Comprehensive debugging interface

## 📋 Pre-Recording Checklist

- [ ] `.env.local` configured with testnet account
- [ ] All Reflector connections working
- [ ] `/reflector-debug` shows green checkmarks
- [ ] `/stake` shows real prices (not demo)
- [ ] Browser console ready for technical demo
- [ ] Screen recording software configured
- [ ] Audio quality tested
- [ ] Script rehearsed

## 🎯 Success Criteria

**Judges should see**:
1. **Real Reflector integration** (not mock data)
2. **SEP-40 compliance** (proper method calls)
3. **Educational value** (clear UI, safe experience)
4. **Technical competence** (proper error handling, debugging)
5. **Composability** (building on existing Stellar infrastructure)
6. **LATAM focus** (addressing real problem for students)

---

**Ready to record! 🎬🚀**
