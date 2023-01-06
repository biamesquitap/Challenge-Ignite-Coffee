import { Routes, Route } from 'react-router-dom'
import { FirstPage } from './FirstPage'
import { Checkout } from './Checkout'
import { SuccessPage } from './SuccessPage'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  )
}
