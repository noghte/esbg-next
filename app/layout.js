import { Inter } from 'next/font/google';
import './globals.css'; // Assuming this path is correct and relative to the layout.js file
import TopMenu from './components/TopMenu'; // Adjust path as needed
import Footer from './components/Footer'; // Adjust path as needed

const inter = Inter({ subsets: ['latin'] });

// Metadata can stay if you're using it somehow, but typically metadata is handled per page or in a Head component.
// export const metadata = {
//   title: 'ESBG (Evolutionary Systems Biology Lab)',
//   description: 'We are an interdisciplinary research group leveraging advances in artificial intelligence, bioinformatics, and systems biochemistry to map the complex relationships connecting protein sequence, structure, function, and evolution.',
// };

export default function RootLayout({ children }) {
  // Use div instead of html and body, apply className to top div if needed
  return (
    <div className={inter.className}> 
      <TopMenu />
      {children}
      <Footer />
    </div>
  );
}
