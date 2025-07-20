import { Card, CardContent } from "@/components/ui/card"
import { Building2, Calculator, CheckCircle, DollarSign, FileText, MapPin, Phone, Star, TrendingUp, Users } from "lucide-react"

const CALENDAR_LINK = "https://cal.com/ajay-patni-e8vaeb/30min"

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
            <a href="#why-us" className="text-gray-600 hover:text-teal-600 transition-colors">
              Why Choose Us
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
              Affordable bookkeeping that solves your cash‑flow, compliance & payroll headaches.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We help small businesses navigate tax uncertainty, compliance changes, and staffing challenges with clean, tax‑ready books every month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CALENDAR_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Schedule Your Free Call
              </a>
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
              Comprehensive financial services designed specifically for small businesses
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
                  Smooth tax season with clean, compliant records and proactive tax planning.
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
                <p className="text-gray-600">Clean financials prepared for loan and grant applications.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Budget Dashboards</h3>
                <p className="text-gray-600">Track income, costs, payroll, and tax trends.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Context & Value */}
      <section id="why-us" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Small Businesses Need ClearBooks</h2>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                🏦 Funding‑Ready? Get your books ready for the wave of <span className="text-teal-600">2025 tax & compliance updates</span>—clean, audit-ready, and optimized for grant/loan applications.
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Small-Business Challenges — What You Should Know:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">The 20% Qualified Business Income (QBI) deduction for pass-through entities may expire or change in 2025, potentially increasing tax rates</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">State & Local Tax (SALT) deduction cap may tighten again after 2029—impacting owners in higher-tax states</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">2025 brings updated tax brackets, standard deductions, and changes to bonus depreciation and R&D expensing rules</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">New payroll rules, higher wage bases, real-time reporting, and overtime regulations are rolling out in 2025</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Lowered IRS thresholds for 1099-K digital payment reporting mean increased tax filing responsibilities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Corporate Transparency Act (FinCEN BOI Filing) requires many small businesses to file by early 2025 or face penalties</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why It Matters:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Avoid sudden tax shocks</strong> — due to changing deductions and compliance requirements</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Improve cash flow</strong> — through reliable invoicing and AP/AR management</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Position for funding</strong> — clean financials are essential for loan and grant applications</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Ensure payroll peace of mind</strong> — stay compliant with evolving regulations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Navigate compliance complexity</strong> — from BOI filings to digital payment reporting</span>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Small Business Owners Say</h2>
            <p className="text-lg text-gray-600">Serving local small businesses</p>
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
                  "ClearBooks helped us navigate the new tax compliance requirements and get our loan application ready. Their attention to detail saved us thousands."
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Sarah Mitchell</p>
                  <p className="text-gray-600">Marketing Solutions Co.</p>
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
                  "Finally, payroll that works! They understand the complex tax landscape and keep us compliant while we focus on growing our business."
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Mike Rodriguez</p>
                  <p className="text-gray-600">Rodriguez Construction</p>
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
                  "Their cash flow forecasting helped us prepare for the upcoming tax changes. Professional service that actually understands small business challenges."
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Jennifer Chen</p>
                  <p className="text-gray-600">Coastal Cafe Group</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Ready to Simplify Your Small Business Finances?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Schedule a free consultation today and discover how we can help your business thrive despite rising costs and compliance challenges.
            </p>
            <a
              href={CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Schedule Your Free Call
            </a>
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
                Professional bookkeeping and finance services for small businesses.
              </p>
              <p className="text-teal-400 font-medium">
                Proudly serving local small businesses
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
                  <span>Serving Local Small Businesses</span>
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
