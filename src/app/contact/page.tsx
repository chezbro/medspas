'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { supabase } from '@/lib/supabase'
import type { LeadSubmission } from '@/lib/supabase'

type FormData = Omit<LeadSubmission, 'id' | 'created_at'>

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setError('')

    try {
      const { error } = await supabase
        .from('lead_submissions')
        .insert([data])

      if (error) throw error

      setIsSuccess(true)
      reset()
    } catch (err) {
      setError('Something went wrong. Please try again later.')
      console.error('Error submitting form:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Container className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Book Your Free Lead Audit
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Fill out the form below and we'll analyze your current marketing strategy and show you exactly how we can help you get 20+ qualified leads per month.
          </p>
        </div>

        <div className="mt-16">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    id="name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    type="email"
                    id="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                  Phone
                </label>
                <div className="mt-2">
                  <input
                    {...register('phone', { required: 'Phone number is required' })}
                    type="tel"
                    id="phone"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Spa Name */}
              <div>
                <label htmlFor="spa_name" className="block text-sm font-medium leading-6 text-gray-900">
                  Med Spa Name
                </label>
                <div className="mt-2">
                  <input
                    {...register('spa_name', { required: 'Med Spa name is required' })}
                    type="text"
                    id="spa_name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                  {errors.spa_name && (
                    <p className="mt-2 text-sm text-red-600">{errors.spa_name.message}</p>
                  )}
                </div>
              </div>

              {/* Marketing Budget */}
              <div>
                <label htmlFor="marketing_budget" className="block text-sm font-medium leading-6 text-gray-900">
                  Current Monthly Marketing Budget
                </label>
                <div className="mt-2">
                  <select
                    {...register('marketing_budget', { required: 'Marketing budget is required' })}
                    id="marketing_budget"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Select a range</option>
                    <option value="$0 - $1,000">$0 - $1,000</option>
                    <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                    <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                    <option value="$5,000+">$5,000+</option>
                  </select>
                  {errors.marketing_budget && (
                    <p className="mt-2 text-sm text-red-600">{errors.marketing_budget.message}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                  Additional Information (Optional)
                </label>
                <div className="mt-2">
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    placeholder="Tell us about your current marketing challenges..."
                  />
                </div>
              </div>
            </div>

            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {isSuccess ? (
              <div className="rounded-md bg-green-50 p-4">
                <p className="text-sm text-green-700">
                  Thanks for your interest! We'll be in touch within 24 hours to schedule your free lead audit.
                </p>
              </div>
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
                size="lg"
              >
                {isSubmitting ? 'Submitting...' : 'Book Your Free Lead Audit'}
              </Button>
            )}
          </form>
        </div>
      </div>
    </Container>
  )
}
