import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About NextSpace',
};

async function page() {
  return (
    <main>
      <h1>About us</h1>
      <p>We are a social media company that wants to bring people together!</p>
    </main>
  );
}

export default page;
