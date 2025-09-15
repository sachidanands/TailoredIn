import { Scissors } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
             <a href="#" className="flex items-center gap-2 font-headline text-2xl font-bold mb-2">
              <Scissors className="h-6 w-6 text-primary" />
              TailoredIn
            </a>
            <p className="text-muted-foreground">Perfect stitches, perfect you.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="tel:+919590187030" className="hover:text-primary">+91 95901 87030</a></li>
              <li>Bangalore North, Karnataka 560077</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <p className="text-muted-foreground">Coming soon</p>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TailoredIn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
