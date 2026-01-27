type CountryPrice = {
    rank: number;
    country: string;
    price: string;
};

const data: CountryPrice[] = [
    { rank: 1, country: "Australia", price: "33.67" },
    { rank: 2, country: "New Zealand", price: "23.84" },
    { rank: 3, country: "United Kingdom", price: "22.85" },
    { rank: 4, country: "Ireland", price: "20.81" },
    { rank: 5, country: "Norway", price: "16.30" },
    { rank: 6, country: "Netherlands", price: "14.65" },
    { rank: 7, country: "Canada", price: "14.45" },
    { rank: 8, country: "France", price: "14.07" },
    { rank: 9, country: "Belgium", price: "13.48" },
    { rank: 10, country: "Singapore", price: "13.24" },
    { rank: 11, country: "Hong Kong (China)", price: "13.14" },
    { rank: 12, country: "Finland", price: "12.89" },
    { rank: 13, country: "Israel", price: "12.65" },
    { rank: 14, country: "Puerto Rico", price: "11.65" },
    { rank: 15, country: "Switzerland", price: "11.39" },
    { rank: 16, country: "United States", price: "10.40" },
    { rank: 17, country: "Sri Lanka", price: "10.34" },
    { rank: 18, country: "Germany", price: "10.20" },
    { rank: 19, country: "Denmark", price: "9.73" },
    { rank: 20, country: "Sweden", price: "8.32" },
    { rank: 21, country: "Czech Republic", price: "7.71" },
    { rank: 22, country: "Luxembourg", price: "7.62" },
    { rank: 23, country: "Austria", price: "7.62" },
    { rank: 24, country: "Saudi Arabia", price: "7.47" },
    { rank: 25, country: "Hungary", price: "7.43" },
    { rank: 26, country: "Malta", price: "7.03" },
    { rank: 27, country: "Italy", price: "7.03" },
    { rank: 28, country: "Estonia", price: "7.03" },
    { rank: 29, country: "Spain", price: "6.83" },
    { rank: 30, country: "Mauritius", price: "6.49" },
    { rank: 31, country: "Portugal", price: "6.45" },
    { rank: 32, country: "Romania", price: "6.45" },
    { rank: 33, country: "Oman", price: "6.37" },
    { rank: 34, country: "Qatar", price: "6.32" },
    { rank: 35, country: "Slovakia", price: "6.27" },
    { rank: 36, country: "United Arab Emirates", price: "6.26" },
    { rank: 37, country: "Slovenia", price: "6.27" },
    { rank: 38, country: "Ecuador", price: "6.00" },
    { rank: 39, country: "Lithuania", price: "5.98" },
    { rank: 40, country: "Peru", price: "5.96" },
    { rank: 41, country: "Panama", price: "5.92" },
    { rank: 42, country: "Latvia", price: "5.86" },
    { rank: 43, country: "Cyprus", price: "5.86" },
    { rank: 44, country: "Croatia", price: "5.86" },
    { rank: 45, country: "Bahrain", price: "5.84" },
    { rank: 46, country: "Chile", price: "5.65" },
    { rank: 47, country: "Greece", price: "5.63" },
    { rank: 48, country: "Uruguay", price: "5.60" },
    { rank: 49, country: "Poland", price: "5.55" },
    { rank: 50, country: "Dominican Republic", price: "5.54" },
    { rank: 51, country: "Costa Rica", price: "5.13" },
    { rank: 52, country: "Thailand", price: "4.69" },
    { rank: 53, country: "Mexico", price: "4.54" },
    { rank: 54, country: "Serbia", price: "4.49" },
    { rank: 55, country: "Malaysia", price: "4.44" },
    { rank: 56, country: "Albania", price: "4.38" },
    { rank: 57, country: "Morocco", price: "4.37" },
    { rank: 58, country: "Montenegro", price: "4.22" },
    { rank: 59, country: "Venezuela", price: "4.00" },
    { rank: 60, country: "Taiwan", price: "3.94" },
    { rank: 61, country: "Japan", price: "3.92" },
    { rank: 62, country: "Bulgaria", price: "3.90" },
    { rank: 63, country: "Bosnia And Herzegovina", price: "3.90" },
    { rank: 64, country: "India", price: "3.84" },
    { rank: 65, country: "Tunisia", price: "3.60" },
    { rank: 66, country: "China", price: "3.59" },
    { rank: 67, country: "Moldova", price: "3.53" },
    { rank: 68, country: "Azerbaijan", price: "3.53" },
    { rank: 69, country: "Jordan", price: "3.53" },
    { rank: 70, country: "Kosovo", price: "3.52" },
    { rank: 71, country: "Cuba", price: "3.50" },
    { rank: 72, country: "Argentina", price: "3.50" },
    { rank: 73, country: "Bangladesh", price: "3.27" },
    { rank: 74, country: "Colombia", price: "3.26" },
    { rank: 75, country: "North Macedonia", price: "3.24" },
    { rank: 76, country: "South Africa", price: "3.23" },
    { rank: 77, country: "Russia", price: "3.20" },
    { rank: 78, country: "Kenya", price: "3.10" },
    { rank: 79, country: "South Korea", price: "3.04" },
    { rank: 80, country: "Philippines", price: "3.03" },
    { rank: 81, country: "Georgia", price: "2.97" },
    { rank: 82, country: "Kuwait", price: "2.93" },
    { rank: 83, country: "Algeria", price: "2.80" },
    { rank: 84, country: "Ukraine", price: "2.77" },
    { rank: 85, country: "Nepal", price: "2.75" },
    { rank: 86, country: "Lebanon", price: "2.75" },
    { rank: 87, country: "Indonesia", price: "2.65" },
    { rank: 88, country: "Armenia", price: "2.64" },
    { rank: 89, country: "Bolivia", price: "2.61" },
    { rank: 90, country: "Belarus", price: "2.43" },
    { rank: 91, country: "Brazil", price: "2.23" },
    { rank: 92, country: "Iran", price: "2.20" },
    { rank: 93, country: "Turkey", price: "2.19" },
    { rank: 94, country: "Pakistan", price: "2.15" },
    { rank: 95, country: "Egypt", price: "2.11" },
    { rank: 96, country: "Libya", price: "2.03" },
    { rank: 97, country: "Uzbekistan", price: "2.00" },
    { rank: 98, country: "Kazakhstan", price: "1.97" },
    { rank: 99, country: "Iraq", price: "1.91" },
    { rank: 100, country: "Zimbabwe", price: "1.50" },
    { rank: 101, country: "Vietnam", price: "1.33" },
    { rank: 102, country: "Nigeria", price: "1.30" }
]


export default function TobaccoPriceTable() {
    return (
        <div className="overflow-hidden rounded-lg border border-gray-200 w-full">
            <table className="w-full border-collapse">
                <tbody className="font-aptos">
                    {data.map((item, index) => (
                        <tr
                            key={item.rank}
                            className={`border-b last:border-b-0 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                }`}
                        >
                            {/* Rank */}
                            <td className={`w-[70px] px-4 py-1.5 md:py-2 text-xs md:text-sm lg:text-base ${item.rank === 1 ? "text-[#CA7B28] font-semibold" : "text-gray-900 text-start"}`}>
                                {item.rank}
                            </td>

                            {/* Country */}
                            <td className={`px-4 py-1.5 md:py-2 text-xs md:text-sm lg:text-base text-center ${item.rank === 1 ? "text-[#CA7B28] font-semibold tracking-wide" : "text-gray-900"}`}>
                                {item.country}
                            </td>

                            {/* Price */}
                            <td className={`w-[70px] px-4 py-1.5 md:py-2 text-right text-xs md:text-sm lg:text-base ${item.rank === 1 ? "text-[#CA7B28] font-semibold" : "text-gray-900"}`}>
                                ${item.price}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
