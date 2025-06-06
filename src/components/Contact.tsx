import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'your_service_id'; // Replace with your EmailJS service ID
const TEMPLATE_ID = 'your_template_id'; // Replace with your EmailJS template ID
const USER_ID = 'your_user_id'; // Replace with your EmailJS user ID (public key)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    urgent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUrgentToggle = () => {
    setFormData(prev => ({
      ...prev,
      urgent: !prev.urgent
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Prepare the template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      urgent: formData.urgent ? "Yes" : "No"
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);

      toast({
        title: "Message sent",
        description: formData.urgent
          ? `Thank you ${formData.name}! Your urgent message has been sent to vishalkadalagi2004@gmail.com.`
          : `Thank you ${formData.name}! I'll respond to your message soon.`,
      });

      setFormData({
        name: '',
        email: '',
        message: '',
        urgent: false
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="pt-16 -mt-16 reveal">
      <h2 className="section-heading text-center mb-12">Contact Me</h2>
      
      <div className="max-w-lg mx-auto card hover:shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
            <Input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Write your message here..."
              className="min-h-[120px]"
              required
            />
          </div>

          <div className="flex items-center space-x-3">
            <div 
              onClick={handleUrgentToggle}
              className={`w-5 h-5 border rounded cursor-pointer flex items-center justify-center ${
                formData.urgent 
                  ? 'bg-primary border-primary' 
                  : 'border-input'
              }`}
            >
              {/* Show tick when urgent is true */}
              {formData.urgent && (
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <label className="cursor-pointer select-none text-sm" onClick={handleUrgentToggle}>
              Mark as urgent
            </label>
          </div>
          
          <div className="text-sm text-muted-foreground">
            I usually reply within 24–48 hours. For urgent inquiries, please mark the checkbox above.
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : (
              <>
                <Send size={16} className="mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
