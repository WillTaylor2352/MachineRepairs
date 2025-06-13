'use client';
// components/Barcode.js
import React, { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';

export default function Barcode({ value, options, overrideText }) {
	const barcodeRef = useRef(null);

	useEffect(() => {
		options.text = overrideText;
		if (barcodeRef.current) {
			JsBarcode(barcodeRef.current, value, options);
		}
	}, [value, options, overrideText]);

	return <svg ref={barcodeRef} className="relative top-10 mx-auto" />;
}
// EXAMPLE IMPLEMENTATION

// import Barcode from '@/components/client/Barcode';
// export default function Test() {
// 	return (
// 		<div>
// 			<Barcode
// 				value="12345678908769876" // Machine Repair numbers go here
// 				options={{
// 					format: 'CODE128',
// 					displayValue: true,
// 					height: 50,
// 					width: 2.75,
// 				}}
// 				overrideText={'Advanced Hardwood - 555-555-5555'} // Customer Name and contact number goes here as override text
// 			/>
// 		</div>
// 	);
// }
