'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/Button"
import { Label } from "@/components/ui/label"
import { sendEmail } from '@/lib/sendEmail'

const EmailForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setIsSubmitting(true)
      setSubmitMessage('')
  
      const formData = new FormData(e.target as HTMLFormElement);
      const toastMessage = await sendEmail(formData);
  
      console.log('Form submitted:', { name, email, message })
  
      setIsSubmitting(false)
      setSubmitMessage(`${toastMessage} @ ${new Date().toLocaleTimeString()}`)
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    }

    useEffect(() => {
        if (submitMessage) {
          const timer = setTimeout(() => {
            setSubmitMessage('');
          }, 5000);
    
          return () => clearTimeout(timer);
        }
      }, [submitMessage]);
    
    return (
    <Card className="w-full max-w-lg mx-auto mt-6">
      <CardHeader>
        <CardTitle className='text-xl text-center text-blue-500'>Email Form</CardTitle>
        <CardDescription className='text-center'>Send me a message and I will get back to you as soon as possible.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input 
              name="username" 
              placeholder="Your name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              name="email" 
              type="email" 
              placeholder="Your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input 
              name="subject" 
              type="text" 
              placeholder="Your email subject" 
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea 
              name="message" 
              placeholder="Your message" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-2">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
          {submitMessage && <p className="text-sm text-green-600">{submitMessage}</p>}
        </CardFooter>
      </form>
    </Card>
  )
}

export default EmailForm

