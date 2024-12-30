This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Struktur Database
Table anggota 
 - id
 - name
 - email
 - phone
 - fakultas
 - prodi
 - semester
 - jabatan
 - divisi ( relasi ke tabel divisi )

Table divisi
 - id
 - name
 - leader
 - anggota ( relasi ke tabel anggota )
 - visi
 - misi

Table news
 - id
 - title
 - description
 - slug
 - content
 - image ( url )
 - created_at
 - updated_at

Table agenda
 - id
 - title
 - description
 - content
 - planned_date
 - completed_date
 - created_at
 - updated_at

Table user 
 - id
 - email
 - password

## Customize Full Calendar JS with class CSS

```css

/* Kelas lokal untuk membungkus FullCalendar */
.fullCalendarWrapper :global(.fc .fc-daygrid-day) {
    border: 1px solid #b6b6b6; 
}

/* Warna gelap untuk header */
.fullCalendarWrapper :global(.fc .fc-col-header-cell) {
    border-bottom: 1px solid #b6b6b6; 
}

.fullCalendarWrapper :global(.fc .fc-event) {
    color: white;
    background-color: #007bff; 
}

/* Warna toolbar dan border */

.fullCalendarWrapper :global(.fc .fc-toolbar) {
    border-bottom: 1px solid #9e9e9e; 
}

/* Font default untuk kalender */
/* Warna latar belakang */

.fullCalendarWrapper :global(.fc) {
    font-family: Arial, sans-serif; 
    background-color: #f9f9f9; 
}

/* Custom untuk toolbar */

.fullCalendarWrapper :global(.fc-toolbar) {
    background-color: #f5f5f5;
    border-bottom: 2px solid #333;
    padding: 10px;
}

/* Judul di toolbar */

.fullCalendarWrapper :global(.fc-toolbar-title) {
    font-size: 18px;
    font-weight: bold;
    color: #007bff;
}

/* Tombol navigasi di toolbar */

.fullCalendarWrapper :global(.fc-button) {
    background-color: #007bff; 
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
}

/* Tombol navigasi saat di-hover */
.fullCalendarWrapper :global(.fc-button:hover) {
    background-color: #0056b3; 
}


/* Highlight hari ini */

.fullCalendarWrapper :global(.fc-day-today) {
    background-color: #ffeb3b; 
    border: 2px solid #f57c00; 
}

/* Highlight saat memilih tanggal */
.fullCalendarWrapper :global(.fc-highlight) {
    background-color: #d1ecf1; 
}

/* Event (acara) */

.fullCalendarWrapper :global(.fc-event) {
    background-color: #4caf50;
    color: white;
    border-radius: 4px;
    padding: 5px;
    font-size: 12px;
}

/* Judul event */
.fullCalendarWrapper :global(.fc-event-title) {
    font-weight: bold;
}

/* Waktu event */
.fullCalendarWrapper :global(.fc-event-time) {
    font-style: italic;
}

/* Header kolom */

.fullCalendarWrapper :global(.fc-col-header-cell) {
    background-color: #e0e0e0; 
    border-bottom: 2px solid #333; 
    text-align: center;
    padding: 10px;
    font-weight: bold;
}

/* Scroll grid */
.fullCalendarWrapper :global(.fc-scrollgrid) {
    border: 2px solid #b6b6b6;
}

/* Warna latar belakang di akhir pekan */
.fullCalendarWrapper :global(.fc-day-sat, .fc-day-sun) {
    background-color: #f5f5f5; 
}

```
