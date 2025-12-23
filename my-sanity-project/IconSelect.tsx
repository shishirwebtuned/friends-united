import React from 'react'
import { StringInputProps, set, unset } from 'sanity'

// ---------------- ICON IMPORTS ----------------
import { TiHome } from 'react-icons/ti'

import {
  FaCartShopping,
  FaBus,
  FaBook,
  FaHeart,
  FaStar,
  FaUser,
  FaUsers,
  FaBell,
  FaGift,
  FaThumbsUp,
  FaRocket,
  FaLightbulb,
  FaGlobe,
  FaMusic,
  FaCamera,
 
  FaLeaf,
  FaMoon,
  FaSun,
  
  FaWrench,
  FaHammer,
  FaPuzzlePiece,
  FaBriefcase,
  FaCalendar,
  FaClock,
  FaMapPin,
  FaRecycle,
} from 'react-icons/fa6'

import {
  FaPrescriptionBottle,
  FaGasPump,
  FaBeer,
  FaWater,
  FaWineGlass,
} from 'react-icons/fa'

import { MdElectricBolt } from 'react-icons/md'
import { GiCigarette, GiSprout } from 'react-icons/gi'

// ---------------- ICON MAP ----------------
const ICON_MAP = {
  TiHome,
  FaCartShopping,
  FaPrescriptionBottle,
  MdElectricBolt,
  FaGasPump,
  FaBus,
  FaBook,
  FaWater,
  GiCigarette,

  FaHeart,
  FaStar,
  FaUser,
  FaUsers,
  FaBell,
  FaGift,
  FaThumbsUp,
  FaRocket,
  FaLightbulb,
  FaGlobe,
  FaMusic,
  FaCamera,
  
  FaLeaf,
  FaMoon,
  FaSun,
 
  FaWrench,
  FaHammer,
  FaPuzzlePiece,
  FaBriefcase,
  FaCalendar,
  FaClock,
  FaMapPin,
  FaRecycle,
  FaBeer,
  FaWineGlass,
  GiSprout,
} as const

const ICON_NAMES = Object.keys(ICON_MAP)

// ---------------- LABEL FORMATTER ----------------
function formatIconLabel(iconName: string) {
  return iconName
    .replace(/^(Fa|Ti|Md|Gi)/, '')      // remove prefix
    .replace(/([A-Z])/g, ' $1')         // split camelCase
    .trim()
}

// ---------------- COMPONENT ----------------
export default function IconSelect({
  value,
  onChange,
  elementProps,
}: StringInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const nextValue = event.target.value
    nextValue ? onChange(set(nextValue)) : onChange(unset())
  }

  const IconComp =
    value && value in ICON_MAP
      ? ICON_MAP[value as keyof typeof ICON_MAP]
      : null

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {/* Dropdown */}
      <select
        {...elementProps}
        value={value || ''}
        onChange={handleChange}
        style={{ fontSize: 15, padding: 8 }}
      >
        <option value="" disabled>
          Select an icon
        </option>

        {ICON_NAMES.map((icon) => (
          <option key={icon} value={icon}>
            {formatIconLabel(icon)}
          </option>
        ))}
      </select>

      {/* Icon Preview */}
      {IconComp && (
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 10,
            background: '#f3f3f3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconComp size={32} />
        </div>
      )}

      {/* Error */}
      {value && !IconComp && (
        <span style={{ color: 'red', fontSize: 12 }}>
          Icon not found
        </span>
      )}
    </div>
  )
}
