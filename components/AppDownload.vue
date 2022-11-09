<template>
	<section
		class="bg-green-500 rounded-lg font-poppins py-8 px-4 sm:py-20 my-20 md:(py-0  mt-50 flex items-center)"
	>
		<div class="md:w-[70%]">
			<h2 class="text-lg pb-5 sm:(text-3xl pb-10)  leading-10 font-bold text-white">
				Finally, a habit tracker that helps <br />
				you do more, by doing less.
			</h2>
			<div class="inline-flex sm:(flex-row) gap-4">
				<a
					href="/apps"
					class="px-2 py-2 text-sm md:(gap-6 px-6 py-3) bg-white text-black rounded-lg inline-flex items-center justify-between gap-2 hover:(shadow-lg shadow-dark-100/30)"
				>
					<Icon name="ion:logo-google-playstore" size="24" />

					<span class="flex flex-col justify-between">
						<span class="text-sm font-normal text-warm-gray-500"
							>available on</span
						>
						Playstore
					</span>
				</a>
				<a
					href="/apps"
					class="px-2 py-2 text-sm md:(gap-6 px-6 py-3) bg-white text-black rounded-lg inline-flex items-center justify-between gap-2 hover:(shadow-lg shadow-dark-100/30)"
				>
					<Icon name="ion:logo-apple" size="24" />

					<span class="flex flex-col justify-between">
						<span class="text-sm font-normal text-warm-gray-500"
							>available on</span
						>
						App Store
					</span>
				</a>
			</div>
		</div>
		<div class="hidden md:block">
			<div
				class="h-130 mt-[-30%] w-100 m-auto border-4 border-b-0 border-green-500 shadow-lg shadow-dark-900 flex items-center rounded-t-5xl justify-center overflow-hidden cursor-pointer bg-dark-700"
			>
				<img
					class="px-4 w-full h-full object-cover object-top transition-all duration-1000 hover:(object-bottom)"
					src="~/assets/ss-09.png"
				/>
			</div>
		</div>
	</section>
</template>
