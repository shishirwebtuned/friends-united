type CountryPrice = {
    rank: number;
    country: string;
    price: string;
};

const data: CountryPrice[] = [
    { rank: 1, country: "Australia", price: "50.00" },
    { rank: 2, country: "New Zealand", price: "35.21" },
    { rank: 3, country: "United Kingdom", price: "33.34" },
    { rank: 4, country: "Ireland", price: "30.15" },
    { rank: 5, country: "Norway", price: "23.84" },
    { rank: 6, country: "Netherlands", price: "21.23" },
    { rank: 7, country: "Canada", price: "20.95" },
    { rank: 8, country: "France", price: "20.39" },
    { rank: 9, country: "Belgium", price: "19.54" },
    { rank: 10, country: "Singapore", price: "19.13" },
    { rank: 11, country: "Finland", price: "18.69" },
    { rank: 12, country: "Hong Kong (China)", price: "18.67" },
    { rank: 13, country: "Israel", price: "18.35" },
    { rank: 14, country: "Switzerland", price: "16.64" },
    { rank: 15, country: "Puerto Rico", price: "16.55" },
    { rank: 16, country: "Germany", price: "14.78" },
    { rank: 17, country: "United States", price: "14.78" },
    { rank: 18, country: "Sri Lanka", price: "14.69" },
    { rank: 19, country: "Denmark", price: "14.11" },
    { rank: 20, country: "Sweden", price: "12.22" },
    { rank: 21, country: "Czech Republic", price: "11.19" },
    { rank: 22, country: "Luxembourg", price: "11.04" },
    { rank: 23, country: "Austria", price: "11.04" },
    { rank: 24, country: "Hungary", price: "10.94" },
    { rank: 25, country: "Saudi Arabia", price: "10.61" },
    { rank: 26, country: "Malta", price: "10.19" },
    { rank: 27, country: "Italy", price: "10.19" },
    { rank: 28, country: "Estonia", price: "10.19" },
    { rank: 29, country: "Spain", price: "9.89" },
    { rank: 30, country: "Mauritius", price: "9.45" },
    { rank: 31, country: "Portugal", price: "9.34" },
    { rank: 32, country: "Romania", price: "9.33" },
    { rank: 33, country: "Slovakia", price: "9.09" },
    { rank: 34, country: "Oman", price: "9.05" },
    { rank: 35, country: "Slovenia", price: "9.00" },
    { rank: 36, country: "Qatar", price: "8.99" },
    { rank: 37, country: "United Arab Emirates", price: "8.90" },
    { rank: 38, country: "Lithuania", price: "8.66" },
    { rank: 39, country: "Ecuador", price: "8.52" },
    { rank: 40, country: "Peru", price: "8.50" },
    { rank: 41, country: "Latvia", price: "8.49" },
    { rank: 42, country: "Cyprus", price: "8.49" },
    { rank: 43, country: "Croatia", price: "8.49" },
    { rank: 44, country: "Panama", price: "8.42" },
    { rank: 45, country: "Uruguay", price: "8.35" },
    { rank: 46, country: "Bahrain", price: "8.29" },
    { rank: 47, country: "Chile", price: "8.24" },
    { rank: 48, country: "Greece", price: "8.15" },
    { rank: 49, country: "Poland", price: "8.08" },
    { rank: 50, country: "Dominican Republic", price: "7.91" },
    { rank: 51, country: "Costa Rica", price: "7.16" },
    { rank: 52, country: "Thailand", price: "6.65" },
    { rank: 53, country: "Mexico", price: "6.61" },
    { rank: 54, country: "Malaysia", price: "6.53" },
    { rank: 55, country: "Serbia", price: "6.51" },
    { rank: 56, country: "Albania", price: "6.42" },
    { rank: 57, country: "Morocco", price: "6.29" },
    { rank: 58, country: "Montenegro", price: "6.12" },
    { rank: 59, country: "Japan", price: "4.00" },
    { rank: 60, country: "Venezuela", price: "5.68" },
    { rank: 61, country: "Taiwan", price: "5.67" },
    { rank: 62, country: "Bulgaria", price: "3.90" },
    { rank: 63, country: "Bosnia And Herzegovina", price: "5.65" },
    { rank: 64, country: "India", price: "5.40" },
    { rank: 65, country: "Tunisia", price: "5.22" },
    { rank: 66, country: "China", price: "5.11" },
    { rank: 67, country: "Kosovo", price: "5.10" },
    { rank: 68, country: "Moldova", price: "5.09" },
    { rank: 69, country: "Azerbaijan", price: "5.01" },
    { rank: 70, country: "Jordan", price: "5.01" },
    { rank: 71, country: "Cuba", price: "4.97" },
    { rank: 72, country: "Argentina", price: "4.97" },
    { rank: 73, country: "North Macedonia", price: "4.82" },
    { rank: 74, country: "South Africa", price: "4.78" },
    { rank: 75, country: "Bangladesh", price: "4.65" },
    { rank: 76, country: "Colombia", price: "4.64" },
    { rank: 77, country: "Russia", price: "4.64" },
    { rank: 78, country: "South Korea", price: "4.47" },
    { rank: 79, country: "Kenya", price: "4.41" },
    { rank: 80, country: "Philippines", price: "4.35" },
    { rank: 81, country: "Georgia", price: "4.22" },
    { rank: 82, country: "Kuwait", price: "4.17" },
    { rank: 83, country: "Algeria", price: "4.06" },
    { rank: 84, country: "Ukraine", price: "3.99" },
    { rank: 85, country: "Lebanon", price: "3.91" },
    { rank: 86, country: "Nepal", price: "3.87" },
    { rank: 87, country: "Indonesia", price: "3.82" },
    { rank: 88, country: "Armenia", price: "3.75" },
    { rank: 89, country: "Bolivia", price: "3.70" },
    { rank: 90, country: "Belarus", price: "3.50" },
    { rank: 91, country: "Brazil", price: "3.41" },
    { rank: 92, country: "Iran", price: "3.13" },
    { rank: 93, country: "Turkey", price: "3.11" },
    { rank: 94, country: "Pakistan", price: "3.05" },
    { rank: 95, country: "Egypt", price: "3.03" },
    { rank: 96, country: "Uzbekistan", price: "2.84" },
    { rank: 97, country: "Kazakhstan", price: "2.82" },
    { rank: 98, country: "Iraq", price: "2.71" },
    { rank: 99, country: "Libya", price: "2.55" },
    { rank: 100, country: "Zimbabwe", price: "3.13" },
    { rank: 101, country: "Vietnam", price: "1.91" },
    { rank: 102, country: "Nigeria", price: "1.85" }
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
