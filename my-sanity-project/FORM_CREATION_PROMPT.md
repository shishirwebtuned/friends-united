# Comprehensive Form Creation Prompt

Create React forms for the following schema types using **Formik** for form management and **Yup** for validation. Each form should be production-ready, fully typed with TypeScript, and ready to submit data to a backend API.

---

## 📋 General Requirements

### Technologies:
- **React** (with TypeScript)
- **Formik** for form state management
- **Yup** for schema validation
- **Axios** or **Fetch API** for backend submission
- **React Icons** (for icon fields)
- **Tailwind CSS** or **Material-UI** for styling

### Form Features:
- Full TypeScript interfaces for form data
- Client-side validation with Yup schemas
- Error message display for each field
- Loading state during submission
- Success/error notification after submission
- Responsive design
- File upload preview for image fields
- Dynamic array field management (add/remove items)

---

## 1️⃣ Contact Form

### Fields:
- **firstName** (string, required)
- **lastName** (string, required)
- **email** (string, required, email format)
- **phoneNumber** (string, required, phone format)
- **message** (string, required, min 10 characters)

### TypeScript Interface:
```typescript
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}
```

### Validation:
- All fields required
- Email must be valid format
- Phone number must be valid format (10-15 digits)
- Message minimum 10 characters

---

## 2️⃣ FAQ Form

### Fields:
- **image** (file upload - image, required)
- **faq** (array of objects, required, min 1 item)
  - **question** (string, required)
  - **answer** (text, required, min 20 characters)

### TypeScript Interface:
```typescript
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQFormData {
  image: File | null;
  faq: FAQItem[];
}
```

### Features:
- Image upload with preview
- Dynamic FAQ list (add/remove FAQ items)
- Minimum 1 FAQ required

---

## 3️⃣ Our Story Form

### Fields:
- **sections** (array of section objects)
  - **title** (string, required)
  - **content** (array of strings, required)
  - **points** (array of strings, optional)
  - **ending** (string, optional)
  - **subTitle** (string, optional)
  - **subPoints** (array of strings, optional)

### TypeScript Interface:
```typescript
interface StorySection {
  title: string;
  content: string[];
  points?: string[];
  ending?: string;
  subTitle?: string;
  subPoints?: string[];
}

interface OurStoryFormData {
  sections: StorySection[];
}
```

### Features:
- Dynamic sections (add/remove sections)
- Dynamic arrays within sections (content, points, subPoints)
- Add/remove functionality for nested arrays

---

## 4️⃣ Real Winners Form

### Fields:
- **sectionTitle** (string, required)
- **sectionDescription** (string, required)
- **winnersList** (array of winner objects, required, min 1)
  - **icon** (string dropdown - react-icons, required)
  - **title** (string, required)
  - **description** (string, required, max 500 characters)

### TypeScript Interface:
```typescript
interface WinnerItem {
  icon: string;
  title: string;
  description: string;
}

interface RealWinnersFormData {
  sectionTitle: string;
  sectionDescription: string;
  winnersList: WinnerItem[];
}
```

### Features:
- Icon selector dropdown with preview
- Dynamic winners list (add/remove winners)
- Character counter for description (max 500)

---

## 5️⃣ Services Form

### Fields:
- **title** (string, required)
- **description** (string, required)
- **image** (file upload - image, required)
- **link** (string URL slug, required)
- **demands** (array of strings, required, min 1)
- **demandText** (text, optional)
- **references** (array of reference objects, optional)
  - **label** (string, required)
  - **link** (URL, required)
- **details** (object, optional)
  - **intro** (text, optional)
  - **sections** (array of section objects)
    - **key** (string, required, unique)
    - **title** (string, optional)
    - **text** (text, optional)
    - **list** (array of strings, optional)

### TypeScript Interface:
```typescript
interface ReferenceItem {
  label: string;
  link: string;
}

interface DetailSection {
  key: string;
  title?: string;
  text?: string;
  list?: string[];
}

interface ServiceDetails {
  intro?: string;
  sections: DetailSection[];
}

interface ServicesFormData {
  title: string;
  description: string;
  image: File | null;
  link: string;
  demands: string[];
  demandText?: string;
  references?: ReferenceItem[];
  details?: ServiceDetails;
}
```

### Features:
- Image upload with preview
- Dynamic demands array
- Dynamic references array
- Nested details object with dynamic sections
- URL validation for reference links
- Unique key validation for detail sections

---

## 6️⃣ Setting Form

### Fields:
- **siteTitle** (string, required)
- **siteDescription** (text, required)
- **logo** (file upload - image, optional)
- **address** (string, optional)
- **phone** (string, optional)
- **email** (string email format, optional)
- **socialLinks** (array of social link objects, optional)
  - **platform** (string, required)
  - **url** (URL, required)
  - **icon** (dropdown select from: FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp, FaTiktok)

### TypeScript Interface:
```typescript
interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

interface SettingFormData {
  siteTitle: string;
  siteDescription: string;
  logo?: File | null;
  address?: string;
  phone?: string;
  email?: string;
  socialLinks?: SocialLink[];
}
```

### Features:
- Logo upload with preview
- Dynamic social links (add/remove)
- Icon selector with social media icons
- Email validation when provided
- URL validation for social links

---

## 7️⃣ United Voices Form

### Fields:
- **title** (string, optional)
- **subTitle** (string, optional)
- **description** (string, optional)
- **frontimage** (file upload - JPEG/PNG only, max 2MB, required)
- **backimage** (file upload - JPEG/PNG only, max 2MB, required)
- **voices** (array of voice objects, optional)
  - **heading** (string, optional)
  - **subHeading** (string, optional)

### TypeScript Interface:
```typescript
interface VoiceItem {
  heading?: string;
  subHeading?: string;
}

interface UnitedVoicesFormData {
  title?: string;
  subTitle?: string;
  description?: string;
  frontimage: File | null;
  backimage: File | null;
  voices?: VoiceItem[];
}
```

### Features:
- Image upload with file type validation (JPEG/PNG only)
- File size validation (max 2MB)
- Image preview for both front and back images
- Dynamic voices array (add/remove)

---

## 8️⃣ Banner Form

### Fields:
- **title** (string, optional)
- **subTitle** (string, optional)

### TypeScript Interface:
```typescript
interface BannerFormData {
  title?: string;
  subTitle?: string;
}
```

### Features:
- Simple text fields
- Optional validation

---

## 🎨 Design Requirements

### Layout:
- Clean, modern card-based design
- Proper spacing and padding
- Clear section headers
- Responsive grid layout (mobile, tablet, desktop)

### Form Controls:
- Labeled inputs with placeholders
- Error messages displayed below fields (red text)
- Required field indicators (asterisk *)
- Helper text for complex fields
- Character counters for limited fields

### Buttons:
- Primary submit button (styled, with loading state)
- Secondary cancel/reset button
- Add/Remove buttons for array fields (icon buttons)

### File Uploads:
- Drag-and-drop area or file picker
- Image preview thumbnails
- File size/type validation feedback
- Remove uploaded file option

### Arrays:
- Visual separation between array items
- Add button at the end of list
- Remove button for each item
- Minimum item requirement display

---

## 🚀 Submission Flow

### API Integration:
```typescript
const handleSubmit = async (values: FormData) => {
  try {
    const formData = new FormData();
    // Append all fields including files
    
    const response = await axios.post('/api/endpoint', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    
    // Show success message
    console.log('Success:', response.data);
  } catch (error) {
    // Show error message
    console.error('Error:', error);
  }
};
```

### Success State:
- Display success notification
- Reset form or redirect
- Show submitted data confirmation

### Error State:
- Display error notification
- Highlight failed fields
- Maintain form data for retry

---

## 📦 Dependencies

```json
{
  "formik": "^2.4.5",
  "yup": "^1.3.3",
  "axios": "^1.6.2",
  "react-icons": "^4.12.0",
  "tailwindcss": "^3.3.6"
}
```

---

## ✅ Deliverables

For each form type, create:
1. **FormComponent.tsx** - Main form component with Formik
2. **validationSchema.ts** - Yup validation schema
3. **types.ts** - TypeScript interfaces
4. **README.md** - Usage instructions and API endpoint documentation

Each form should be:
- ✅ Fully typed with TypeScript
- ✅ Validated with Yup
- ✅ Styled and responsive
- ✅ Ready for production use
- ✅ Ready to submit to backend API
