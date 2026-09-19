import Animated from './Animated'
import { socialLinks, quickLinks, sitemapLinks } from '../data/data'
import { Mail, Phone } from "lucide-react";

const Footer = () => {
	return (
		<footer className="px-auto relative mt-44 overflow-hidden">
			<div className="max-w-7xl mx-auto">
				{/* row */}
				{/* Row */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-8">

					{/* Column 1 - Brand & Socials */}
					<div className="flex flex-col items-start text-left">
						<Animated>
							<img src="/assets/logo.svg" alt="logo" />
						</Animated>

						<Animated delay={0.2}>
							<p className="mt-3 text-sm/5.5 text-zinc-600 max-w-[81.25%]">
								Serving freshly prepared dishes with authentic flavors, premium
								ingredients and exceptional hospitality every day.
							</p>
						</Animated>

						<div className="flex items-center gap-1.5 mt-6">
							{socialLinks.map((item, index) => (
								<Animated key={index} delay={index * 0.05}>
									<a
										href={item.href}
										target="_blank"
										rel="noopener noreferrer"
										className="size-7.5 rounded-full border border-slate-300 grid place-content-center"
									>
										{item.name === "GitHub" ? (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="currentColor"
											>
												<path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.69.41.35.78 1.04.78 2.1v3.12c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
											</svg>
										) : (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="currentColor"
											>
												<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.57V9H3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
											</svg>
										)}
									</a>
								</Animated>
							))}
						</div>
					</div>


					{/* Column 2 - Quick Links */}
					<div>
						<p className="font-medium mb-5">Quick Links</p>

						<div className="flex flex-col gap-2.5">
							{quickLinks.map((link, index) => (
								<Animated key={link.name} delay={index * 0.05}>
									<a
										href={link.href}
										className="text-zinc-600 hover:text-zinc-500"
									>
										{link.name}
									</a>
								</Animated>
							))}
						</div>
					</div>


					{/* Column 3 - Get in Touch */}
					<div>
						<p className="font-medium mb-5">Get in Touch</p>

						<div className="space-y-2">
							<Animated>
								<a
									href="mailto:sandhyaakumari23@gmail.com"
									className="flex items-center gap-1 text-zinc-600 hover:text-zinc-500"
								>
									<Mail size={16} className="shrink-0" />
									sandhyaakumari23@gmail.com
								</a>
							</Animated>

							
						</div>
					</div>


					{/* Column 4 - Sitemap */}
					<div>
						<p className="font-medium mb-5">Sitemap</p>

						<div className="flex flex-col gap-2.5">
							{sitemapLinks.map((link, index) => (
								<Animated key={link.name} delay={index * 0.05}>
									<a
										href={link.href}
										className="text-zinc-600 hover:text-zinc-500"
									>
										{link.name}
									</a>
								</Animated>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
