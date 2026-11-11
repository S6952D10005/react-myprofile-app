import { useState } from 'react'
import MyCard from '../components/MyCard'
import SideMenu from '../components/SideMenu'

const emptyForm = {
  email: '',
  phone: '',
  name: '',
  address: '',
  content: '',
  newsletter: false,
}

export default function ContactMe() {
  const [form, setForm] = useState(emptyForm)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    setSent(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form:', form)
    setSent(true)
    setForm(emptyForm)
  }

  return (
    <div className="frame">
      <MyCard />

      <main className="content">
        <h1 className="title title--xl">
          Contact <span className="accent">Me</span>
        </h1>
        <p className="subtitle">Let&apos;s get in touch!</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__grid">
            <label className="field">
              <span>Email</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </label>
            <label className="field">
              <span>Phone</span>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} />
            </label>
            <label className="field">
              <span>Name</span>
              <input type="text" name="name" value={form.name} onChange={handleChange} required />
            </label>
            <label className="field">
              <span>Address</span>
              <input type="text" name="address" value={form.address} onChange={handleChange} />
            </label>
            <label className="field field--full">
              <span>Content</span>
              <textarea
                name="content"
                rows={4}
                value={form.content}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <label className="checkbox">
            <input
              type="checkbox"
              name="newsletter"
              checked={form.newsletter}
              onChange={handleChange}
            />
            <span>I would like to receive the newsletter.</span>
          </label>

          <button type="submit" className="btn btn--primary contact-form__submit">
            Submit
          </button>

          {sent && <p className="contact-form__success">Thank you! Your message has been sent.</p>}
        </form>
      </main>

      <SideMenu />
    </div>
  )
}
