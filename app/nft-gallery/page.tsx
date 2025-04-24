'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-950 text-white flex flex-col items-center justify-between p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center mt-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-purple-400">
          The Fallen Angels
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          A digital movement honoring women who lost their lives to violence. Powered by blockchain, driven by compassion.
        </p>

        <Card className="bg-black/40 border border-purple-500 text-left">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">
              Token Symbol: <span className="text-white">TFA</span>
            </h2>
            <p className="text-sm text-gray-400 mb-2">
              Total Supply: <span className="text-white">33,000,000</span>
            </p>
            <p className="text-sm text-gray-400 mb-2">
              Blockchain: <span className="text-white">Polygon</span>
            </p>
            <p className="text-sm text-gray-400 mb-2">
              30% Locked for Long-Term Support
            </p>
            <p className="text-sm text-gray-400">
              70% Available for Trading
            </p>
          </CardContent>
        </Card>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/litepaper.pdf" target="_blank">
            <Button className="bg-purple-600 hover:bg-purple-700 transition-all">
              <ArrowRight className="mr-2 h-4 w-4" /> View Litepaper
            </Button>
          </Link>
          <Link href="/nft-gallery" target="_blank">
            <Button variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-900">
              <Globe className="mr-2 h-4 w-4" /> Explore NFTs
            </Button>
          </Link>
        </div>

        <div className="mt-12 text-left space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-purple-300 mb-2">Our Mission</h2>
            <p className="text-gray-300">
              The Fallen Angels project aims to honor and remember the lives of women lost to violence. Through NFT art, community support, and the TFA token, we are building awareness and funding positive change.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-300 mb-2">Join the Movement</h2>
            <p className="text-gray-300">
              Whether you’re an artist, advocate, or blockchain enthusiast, we welcome you to join our cause. Connect with us on social media or send us an email to get involved.
            </p>
          </section>
        </div>
      </motion.div>

      <footer className="text-sm text-gray-500 mt-16 mb-4 flex flex-col items-center gap-2">
        <div className="flex gap-4">
          <Link href="https://twitter.com/tfaofficial" target="_blank" aria-label="Twitter">
            <Twitter className="h-5 w-5 hover:text-purple-400" />
          </Link>
          <Link href="mailto:contact@tfaofficial.us" aria-label="Email">
            <Mail className="h-5 w-5 hover:text-purple-400" />
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} The Fallen Angels. All rights reserved.</p>
      </footer>
    </main>
  );
}
