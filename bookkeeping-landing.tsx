import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calculator, FileText, MapPin, Phone, Star, Users } from "lucide-react"

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
            <a href="#about" className="text-gray-600 hover:text-teal-600 transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-teal-600 transition-colors">
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
              Bookkeeping & Finance Services for Local Small Businesses
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Take the stress out of managing your finances. We provide reliable, personalized bookkeeping services so
              you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Get Free Consultation
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial services tailored to your small business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Bookkeeping */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
                  <Calculator className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Bookkeeping</h3>
                <p className="text-gray-600 leading-relaxed">
                  Accurate record-keeping, expense tracking, and financial organization to keep your business running
                  smoothly.
                </p>
              </CardContent>
            </Card>

            {/* Payroll */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Payroll Services</h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete payroll management including tax withholdings, direct deposits, and compliance reporting.
                </p>
              </CardContent>
            </Card>

            {/* Tax Preparation */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <FileText className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tax Preparation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Expert tax preparation and planning to maximize deductions and ensure compliance with regulations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Trusted by local businesses across the community</p>
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
                  "ClearBooks transformed our financial management. Sarah's attention to detail and friendly approach
                  made everything so much easier."
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Mike Chen</p>
                  <p className="text-gray-600">Chen's Restaurant</p>
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
                  "Professional, reliable, and always available when we need help. Our payroll has never been smoother."
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Lisa Rodriguez</p>
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
                  "They saved us thousands on our taxes and gave us peace of mind. Highly recommend to any small
                  business owner."
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">David Thompson</p>
                  <p className="text-gray-600">Thompson Auto Repair</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Ready to Simplify Your Finances?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Schedule a free consultation today and discover how we can help your business thrive.
            </p>
            <Button
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Schedule Free Consultation
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
              <p className="text-gray-400 leading-relaxed">
                Professional bookkeeping and finance services for local small businesses.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Bookkeeping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Payroll Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Tax Preparation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Financial Consulting
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
                  <span>(302) 384-1206</span>
                </div>
                {/* <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@clearbooks.com</span>
                </div> */}
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>123 Main St, Your City</span>
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
