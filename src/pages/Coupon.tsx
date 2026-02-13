import React, { useState } from 'react'
import '../App.css'

const Coupon: React.FC = () => {
  const code = 'Card No:- 6001220034676569 Pin:-267811'
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      // fallback
      const el = document.createElement('textarea')
      el.value = code
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <section className="coupon">
      <div className="coupon-card">
        <h2 className="section-title">A small gift for you 💝</h2>
        <p className="coupon-desc">Use this Myntra coupon to treat yourself.</p>
        <div className="coupon-code">{code}</div>
        <button className="btn" onClick={copy}>{copied ? 'Copied!' : 'Copy Code'}</button>
      </div>
    </section>
  )
}

export default Coupon
