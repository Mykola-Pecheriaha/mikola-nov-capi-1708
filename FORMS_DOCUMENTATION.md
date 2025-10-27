# Forms and Admin Panel Documentation

## Overview
This document describes how patient forms are connected to the admin panel in the project.

## Forms in the Project

### 1. Medical Form (Медична форма)
**Location**: `/src/app/medical-form/page.tsx`  
**URL**: `/medical-form`  
**Purpose**: Detailed medical consultation form for patients

**Features**:
- Patient information (name, age, gender, phone, height, weight)
- BMI calculation
- Complaints description
- Examinations checklist
- Medical history (chronic diseases, medications, pain level)
- Additional comments

**Data Flow**:
- Form submits to → `/api/medical-forms` (POST)
- Data saved to → `server/medical-forms.json`
- Displayed in → `/admin/medical-forms`

### 2. Consultation Forms (Форми консультації)

#### a) Burger Menu Consultation Modal
**Location**: `/src/components/Header/BurgerConsultationModal.tsx`  
**Purpose**: Quick consultation booking from header menu

**Features**:
- Name
- Phone
- Comment/Email

**Data Flow**:
- Form submits to → `/api/consultations` (POST)
- Data saved to → `server/consultations.json`
- Displayed in → `/admin/consultations`

#### b) Hernia FAQ Consultation Form
**Location**: `/src/components/GeneralHernia/GernioFAQ.tsx`  
**Purpose**: Consultation booking from hernia FAQ page

**Features**:
- Name
- Phone
- Comment

**Data Flow**:
- Form submits to → `/api/consultations` (POST)
- Data saved to → `server/consultations.json`
- Displayed in → `/admin/consultations`

## API Endpoints

### GET /api/medical-forms
Returns all medical forms from `server/medical-forms.json`

### POST /api/medical-forms
Saves a new medical form with:
- Auto-generated ID
- Timestamp (createdAt)
- Status (pending by default)
- All form data

### GET /api/consultations
Returns all consultation bookings from `server/consultations.json`

### POST /api/consultations
Saves a new consultation booking with:
- Timestamp (createdAt)
- Form data (name, phone, comment)

## Admin Pages

### 1. Main Admin Dashboard
**URL**: `/admin`  
**Features**:
- Real-time statistics:
  - New consultations today
  - Total medical forms
  - Pending forms (status = 'pending')
  - Processed today (reviewed/completed)
- Quick links to detailed pages
- Form counts in card headers

### 2. Consultations Admin Page
**URL**: `/admin/consultations`  
**Features**:
- Table view of all consultation bookings
- Display: name, phone, comment, date
- Auto-refreshes on page load

### 3. Medical Forms Admin Page
**URL**: `/admin/medical-forms`  
**Features**:
- Table view with key information
- BMI display with status indicators
- Pain level indicators (color-coded)
- Status badges (pending/reviewed/completed)
- Detailed modal view for each form
- Delete functionality (in modal)

## Data Storage

All patient data is stored in JSON files in the `server/` directory:

- `server/medical-forms.json` - Medical forms data
- `server/consultations.json` - Consultation bookings

**Note**: In production, this should be replaced with a proper database.

## Form Validation

### Medical Form
- Name is required
- Age is required (1-120)
- Height and weight are optional (for BMI calculation)
- All other fields are optional

### Consultation Forms
- Name is required
- Phone is required
- Comment/Email is optional

## Status Management

Medical forms have three statuses:
- **pending**: Newly submitted forms
- **reviewed**: Forms that have been reviewed
- **completed**: Forms that have been processed

Status changes would need to be implemented in the admin panel (future enhancement).

## Integration Summary

✅ **All forms are fully connected:**
1. Medical form → API → Admin panel
2. Consultation forms → API → Admin panel
3. Admin dashboard shows real statistics
4. All data is properly saved and displayed

## Future Enhancements

Possible improvements:
- Add status change functionality in admin panel
- Add search/filter capabilities
- Add export to CSV/Excel
- Add email notifications on form submission
- Add form validation on server side
- Add authentication for admin panel
- Replace JSON storage with database
