import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Calculator, CheckCircle, DollarSign, FileText, MapPin, Phone, Star, TrendingUp, Users } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calculator className="h-8 w-8 text-teal-600" />
            <span className="text-xl font-semibold text-gray-900">ClearBooks</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-teal-600 transition-colors">
              Services
            </a>
            <a href="#why-delaware" className="text-gray-600 hover:text-teal-600 transition-colors">
              Why Delaware
            </a>
            <a href="tel:+13023841206" className="text-gray-600 hover:text-teal-600 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Affordable Delaware bookkeeping that solves your cash‑flow, compliance & payroll headaches.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We help small businesses survive Delaware's high fees, tax uncertainty, and staffing challenges with clean, tax‑ready books every month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Schedule Your Free Call
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Benefit-Focused Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial services designed specifically for Delaware small businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Bookkeeping & Reconciliation */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors">
                  <Calculator className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Bookkeeping & Reconciliation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Monthly bank, credit card & payroll reconciliations for accurate, organized records.
                </p>
              </CardContent>
            </Card>

            {/* QuickBooks/Xero Setup & Cleanup */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">QuickBooks/Xero Setup & Cleanup</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get accounting systems set up properly or cleaned up fast—so your books are reliable.
                </p>
              </CardContent>
            </Card>

            {/* Payroll & AP/AR Support */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Payroll & AP/AR Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ensure accurate payroll and timely invoicing to reduce staffing and receivables headaches.
                </p>
              </CardContent>
            </Card>

            {/* Tax-Ready Reports & Year-End Prep */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tax‑Ready Reports & Year‑End Prep</h3>
                <p className="text-gray-600 leading-relaxed">
                  Smooth tax season with clean, compliant records and Delaware franchise‑tax tracking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Add-On Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600">Optional services to enhance your financial management</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cash Flow Forecasting</h3>
                <p className="text-gray-600">Know what you'll have in the bank every month.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <DollarSign className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Funding‑Ready Statements</h3>
                <p className="text-gray-600">Clean financials prepared for SSBCI loan/grant applications.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Budget Dashboards</h3>
                <p className="text-gray-600">Track income, costs, gross‑receipts tax, and payroll trends.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Delaware Context & Value */}
      <section id="why-delaware" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Delaware Businesses Need ClearBooks</h2>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                🏦 Funding‑Ready? Delaware is disbursing <span className="text-teal-600">$14 million</span> in small‑business loans and grants—get your books ready.
              </h3>
              <p className="text-center text-gray-600 mb-6">
                Learn more about <a href="https://business.delaware.gov/edge/" className="text-teal-600 hover:text-teal-700 underline" target="_blank" rel="noopener noreferrer">SSBCI & EDGE grant programs</a>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Delaware's Business Challenges:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Delaware charges significant franchise and gross‑receipts taxes, plus high incorporation fees</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Federal Small Business Deduction (20%) may expire this year, raising rates from ~29.7% to ~46.2%</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Delaware's Morgan tax changes and compliance updates are adding cost pressure</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why It Matters:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Avoid sudden tax shocks</strong> — due to rising fees and uncertain deductions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Improve cash flow</strong> — through reliable invoicing and AP/AR management</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Position for funding</strong> — clean financials are essential for SSBCI/EDGE applications</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Ensure payroll peace of mind</strong> — stay compliant despite labor shortages</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Delaware Businesses Say</h2>
            <p className="text-lg text-gray-600">Serving Delaware businesses statewide</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <Card className="bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "ClearBooks helped us navigate Delaware's franchise tax requirements and get our SSBCI application ready. Their attention to detail saved us thousands."
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Sarah Mitchell</p>
                  <p className="text-gray-600">Delaware Marketing Solutions, Wilmington</p>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Finally, payroll that works! They understand Delaware's tax landscape and keep us compliant while we focus on growing our business."
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Mike Rodriguez</p>
                  <p className="text-gray-600">First State Construction, Dover</p>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Their cash flow forecasting helped us prepare for Delaware's tax changes. Professional service that actually understands local business challenges."
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Jennifer Chen</p>
                  <p className="text-gray-600">Coastal Cafe Group, Rehoboth Beach</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Ready to Simplify Your Delaware Business Finances?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Schedule a free consultation today and discover how we can help your Delaware business thrive despite rising costs and compliance challenges.
            </p>
            <Button
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Schedule Your Free Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Calculator className="h-6 w-6 text-teal-400" />
                <span className="text-lg font-semibold">ClearBooks</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Professional bookkeeping and finance services for Delaware small businesses.
              </p>
              <p className="text-teal-400 font-medium">
                Proudly serving Delaware‑based small businesses only
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Bookkeeping & Reconciliation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    QuickBooks/Xero Setup
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Payroll & AP/AR Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Tax‑Ready Reports
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+13023841206" className="hover:text-teal-400 transition-colors">
                    (302) 384-1206
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Serving All Delaware Businesses</span>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-400">
                <p>Monday - Friday</p>
                <p>9:00 AM - 6:00 PM</p>
                <p className="mt-3">Saturday</p>
                <p>10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ClearBooks. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
