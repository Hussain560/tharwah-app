# Project Brief & UI/UX Vision: ثروه (Tharwah)

This document outlines the complete product vision, design system, and architecture for the "ثروه" application. It serves as the central guide for all development and design decisions.

## 1. Core Concept & Value Proposition

**Problem:** Young people and middle-income individuals often run out of money before the end of the month. Existing apps only track spending; they don't prevent it.

**Solution:** "ثروه" introduces a unique and powerful feature: the "Smart Lock for Spending" (القفل الذكي للإنفاق).

**Value Proposition:** We don't just show you where your money went; we give you the tools to control its flow proactively. This provides users with financial control and peace of mind.

## 2. UI/UX Design System

Our design will be clean, modern, and trustworthy, inspired by the provided screenshots of the STC Pay application.

**Layout:** A card-based interface. All major components (balances, budget items, transactions, settings) will be presented within individual cards with rounded corners (rounded-xl) and soft shadows (shadow-md).

**Color Palette:**

- Background: A very light, clean off-white or light gray (e.g., Tailwind slate-100).
- Primary: A strong, trustworthy purple for primary actions, titles, and card backgrounds (e.g., Tailwind purple-600).
- Accent: White and light shades of gray for text and card content.
- Success/Income: Green tones.
- Warning/Expense: Red/Orange tones.

**Typography:** A clean, sans-serif font, with a clear hierarchy. Bold for titles and key figures, regular/medium for descriptive text.

**Iconography:** Simple, outlined icons that are easy to understand. Each icon should be visually consistent.

## 3. Application Architecture & Screen Flow

The app will be structured around a five-tab bottom navigation bar for intuitive access to core features.

**Navigation: Bottom Tab Bar**
- Home (الرئيسية): The main dashboard.
- Budgets (الميزانيات): Where the "Smart Lock" is managed.
- Transactions (المعاملات): Full history and search.
- AI Advisor (المستشار): Personalized insights.
- Settings (الإعدادات): Profile and app management.

### Screen-by-Screen Breakdown

#### Screen 1: Home (الرئيسية)

**Purpose:** Provide a quick, high-level overview of the user's financial status.

**Components:**

- Welcome message ("Good morning, [User]!").
- A prominent main card displaying the Total Balance.
- Quick action buttons below the balance card ("Add Expense", "Transfer").
- A summary section showing a preview of the top 3-4 active budget statuses (from the Budgets screen).

#### Screen 2: Budgets (الميزانيات)

**Purpose:** This is the core of the app. Users manage their "Smart Lock" budgets here.

**Components:**

- A clear title: "Smart Lock Budgets".
- A list of all budget categories (Rent, Groceries, etc.), each in its own card.
- Each card will display: Category Name, Amount Spent vs. Total, Progress Bar, and the Lock Status (e.g., "Locked", "Unlocks on [Date]").
- A floating action button (+) to create a new budget.

#### Screen 3: Transactions (المعاملات)

**Purpose:** A detailed and searchable log of all financial activity.

**Components:**

- A search bar at the top.
- Filter options (by date, by budget).
- A chronological list of transactions. Each transaction is a row or a small card showing: Merchant/Source, Category, Amount, and Date.

#### Screen 4: AI Advisor (المستشار)

**Purpose:** To provide proactive, intelligent insights.

**Components:**

- A chat-like interface or a feed of insight cards.
- Examples of AI cards: "Spending Alert: You're close to your grocery limit," or "Insight: You could save 80 SAR/month by reviewing your subscriptions."

#### Screen 5: Settings (الإعدادات)

**Purpose:** Account and application management.

**Components:**

- A list-based menu.
- Each item is a row: "Profile Information", "Linked Accounts", "Notifications", "Language", "Security".
