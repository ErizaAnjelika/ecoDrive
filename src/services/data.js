// category id
export const carCategory = [
  {
    id: 1,
    name: "Toyota",
  },
  {
    id: 2,
    name: "Tesla",
  },
  {
    id: 3,
    name: "BMW",
  },
  {
    id: 4,
    name: "Mitsubishi",
  },
  {
    id: 5,
    name: "Hyundai",
  },
];

// car list
export const carList = [
  {
    categoryId: 1, // toyota
    cars: [
      {
        id: 1,
        name: "Toyota Innova Zenix Hybrid",
        seater: 7,
        kecepatan: "170-180 km/h",
        jenis: "MPV",
        harga: "Rp 550.000.000",
        image: "/img/toyota/Innova-Zenix.png",
        detail: {
          mesin: {
            type: "2.0L 4-silinder",
            cc: " 1987 cc",
            tenaga: " 146 hp @ 6,200 rpm",
          },
          transmisi: {
            type: "CVT (Continuously Variable Transmission)",
          },
          dimensi: {
            Panjang: "4,735 mm",
            Lebar: "1,830 mm",
            Tinggi: "1,795 mm",
          },
          kapasitas: {
            penumpang: 5,
            bagasi: "-",
          },
          Suspension: {
            front: "MacPherson Strut",
            rear: "Torsion Beam",
            remDepan: "Ventilated Disc",
            remBelakang: "Solid Disc",
          },
          fitur: {
            interior: {
              material: "Kulit",
              fitur: [
                "Airbags",
                " ABS dengan EBD",
                "Vehicle Stability Control (VSC)",
                "Hill Start Assist",
              ],
            },
            exterior: {
              velg: "Alloy Wheels 17 inci",
              lampu: "LED",
            },
            mode: "Eco, Normal, dan Power Mode",
            lainnya: [
              "Kamera Mundur dan Sensor Parkir",
              "Keyless Entry dan Push Start Button",
            ],
          },
        },
      },
      {
        id: 2,
        name: "Toyota bZ4X",
        seater: 5,
        kecepatan: "160 km/h",
        jenis: "SUV",
        harga: "Rp 1.200.000.000",
        image: "/img/toyota/bZ4X.png",
        detail: {
          mesin: {
            type: "Permanent Magnet Synchronous Motor",
            cc: "-",
            tenaga: " 201 hp (Front-Wheel Drive) / 215 hp (All-Wheel Drive)",
          },
          transmisi: {
            type: "-",
          },
          dimensi: {
            Panjang: "4,690 mm",
            Lebar: "1,860 mm",
            Tinggi: " 1,650 mm",
          },
          kapasitas: {
            penumpang: 5,
            bagasi: "452 liter",
          },
          Suspension: {
            front: "MacPherson Strut",
            rear: " Double Wishbone",
            remDepan: "Ventilated Disc",
            remBelakang: "Solid Disc",
          },
          fitur: {
            interior: {
              material: "Kulit sintetis",
              fitur: [
                "Airbags",
                " ABS dengan EBD",
                "Vehicle Stability Control (VSC)",
                "Lane Departure Alert",
                "Hill Start Assist",
                " Adaptive Cruise Control",
              ],
            },
            exterior: {
              velg: "Alloy Wheels 18-20 inci",
              lampu: "LED",
            },
            mode: "Eco, Normal, dan Sport Mode",
            lainnya: [
              "Kamera Mundur dan Sensor Parkir",
              "Keyless Entry dan Push Start Button",
            ],
          },
        },
      },
      {
        id: 3,
        name: "Toyota Corolla Cross Hybrid",
        seater: 5,
        kecepatan: "170 km/h",
        jenis: "SUV",
        harga: "Rp 550.000.000",
        image: "/img/toyota/Corolla.png",
        detail: {
          mesin: {
            type: "1.8L 4-silinder",
            cc: "1798 cc",
            tenaga: "139 hp @ 6,400 rpm",
          },
          transmisi: {
            type: "CVT (Continuously Variable Transmission)",
          },
          dimensi: {
            Panjang: "4,460 mm",
            Lebar: "1,825 mm",
            Tinggi: " 1,620 mm",
          },
          kapasitas: {
            penumpang: 5,
            bagasi: "440 liter",
          },
          Suspension: {
            front: "MacPherson Strut",
            rear: " Double Wishbone",
            remDepan: "Ventilated Disc",
            remBelakang: "Solid Disc",
          },
          fitur: {
            interior: {
              material: "Kulit sintetis",
              fitur: [
                "Airbags",
                " ABS dengan EBD",
                "Vehicle Stability Control (VSC)",
                "Lane Departure Alert",
                "Hill Start Assist",
                " Adaptive Cruise Control",
              ],
            },
            exterior: {
              velg: "Alloy Wheels 17 inci",
              lampu: "LED",
            },
            mode: "Eco, Normal, dan Sport Mode",
            lainnya: [
              "Kamera Mundur dan Sensor Parkir",
              "Keyless Entry dan Push Start Button",
            ],
          },
        },
      },
      {
        id: 4,
        name: "Toyota Yaris Cross Hybrid",
        seater: 5,
        kecepatan: "170 km/h",
        jenis: "SUV",
        harga: "Rp 450.000.000",
        image: "/img/toyota/Yaris.png",
        detail: {
          mesin: {
            type: "1.5L 4-silinder",
            cc: "1496 cc",
            tenaga: "116 hp @ 5,500 rpm",
          },
          transmisi: {
            type: "E-CVT (Electronically Controlled Continuously Variable Transmission)",
          },
          dimensi: {
            Panjang: "4,180 mm",
            Lebar: "1,765 mm",
            Tinggi: " 1,590 mm",
          },
          kapasitas: {
            penumpang: 5,
            bagasi: "390 liter",
          },
          Suspension: {
            front: "MacPherson Strut",
            rear: "Torsion Beam",
            remDepan: "Ventilated Disc",
            remBelakang: "Drum",
          },
          fitur: {
            interior: {
              material: "Kulit sintetis",
              fitur: [
                "Airbags",
                " ABS dengan EBD",
                "Vehicle Stability Control (VSC)",
                "Lane Departure Alert",
                "Hill Start Assist",
              ],
            },
            exterior: {
              velg: "Alloy Wheels 17 inci",
              lampu: "LED",
            },
            mode: "Eco dan sport mode",
            lainnya: [
              "Kamera Mundur dan Sensor Parkir",
              "Keyless Entry dan Push Start Button",
            ],
          },
        },
      },
      {
        id: 5,
        name: "Toyota Camry Hybrid",
        seater: 5,
        kecepatan: "180 km/h",
        jenis: "Sedan",
        harga: "Rp 900.000.000",
        image: "/img/toyota/Camry.png",
        detail: {
          mesin: {
            type: "2.5L 4-silinder",
            cc: "2487 cc",
            tenaga: "176 hp @ 5,700 rpm",
          },
          transmisi: {
            type: "E-CVT (Electronically Controlled Continuously Variable Transmission)",
          },
          dimensi: {
            Panjang: "4,885 mm",
            Lebar: "1,840 mm",
            Tinggi: " 1,445 mm",
          },
          kapasitas: {
            penumpang: 5,
            bagasi: "427 liter",
          },
          Suspension: {
            front: "MacPherson Strut",
            rear: "Double Wishbone",
            remDepan: "Ventilated Disc",
            remBelakang: "Solid Disc",
          },
          fitur: {
            interior: {
              material: "Kulit",
              fitur: [
                "Airbags",
                " ABS dengan EBD",
                "Vehicle Stability Control (VSC)",
                "Adaptive Cruise Control",
                "Hill Start Assist",
              ],
            },
            exterior: {
              velg: "Alloy Wheels 17-18 inci",
              lampu: "LED",
            },
            mode: "Eco, Normal, dan Sport Mode",
            lainnya: [
              "Kamera Mundur dan Sensor Parkir",
              "Keyless Entry dan Push Start Button",
            ],
          },
        },
      },
    ],
  },
  {
    categoryId: 2, // tesla
    cars: [
      {
        id: 6,
        name: "Tesla Model S",
        seater: 5,
        kecepatan: "250 km/h",
        jenis: "Sedan",
        harga: "Rp 1.500.000.000",
        image: "/img/tesla/Model-S.png",
        detail: {
          mesin: {
            type: "Dual Electric Motors (All-Wheel Drive)",
            cc: "-",
            tenaga: "670 hp - 1.020 hp",
          },
          transmisi: {
            type: "Automatic",
          },
          dimensi: {
            Panjang: "4,970 mm",
            Lebar: "1,964 mm",
            Tinggi: "1,445 mm",
          },
          kapasitas: {
            penumpang: 5,
            bagasi: "894 liter",
          },
          Suspension: {
            front: "Air Suspension",
            rear: "Air Suspension",
            remDepan: "Ventilated Disc",
            remBelakang: "Ventilated Disc",
          },
          fitur: {
            interior: {
              material: "Kulit Premium",
              fitur: [
                "Airbags",
                "ABS dengan EBD",
                "Vehicle Stability Control (VSC)",
                "Hill Start Assist",
                "Lane Departure Warning",
                "Adaptive Cruise Control",
              ],
            },
            exterior: {
              velg: "Alloy Wheels 19-21 inci",
              lampu: "LED Adaptive Headlights",
            },
            mode: "Standard dan Sport",
            lainnya: [
              "Kamera Mundur dan Sensor Parkir",
              "Keyless Entry dan Push Start Button",
            ],
          },
        },
      },
      {
        id: 7,
        name: "Tesla Model 3",
        seater: 5,
        kecepatan: "225 km/h",
        jenis: "Sedan",
        harga: "Rp 800.000.000",
        image: "/img/tesla/Model-3.png",
        detail: {
          mesin: {
            type: "Dual Electric Motors (All-Wheel Drive)",
            cc: "-",
            tenaga: "283 hp (Standard Range) / 450 hp (Performance)",
          },
          transmisi: {
            type: "-",
          },
          dimensi: {
            Panjang: "4,694 mm",
            Lebar: "1,849 mm",
            Tinggi: "1,443 mm",
          },
          kapasitas: {
            penumpang: 5,
            bagasi: "425 liter",
          },
          Suspension: {
            front: "Independent MacPherson",
            rear: "Multi-Link",
            remDepan: "Ventilated Disc",
            remBelakang: "Ventilated Disc",
          },
          fitur: {
            interior: {
              material: "Kulit sintetis",
              fitur: [
                "Airbags",
                "ABS dengan EBD",
                "Vehicle Stability Control (VSC)",
                "Lane Departure Warning",
                "Hill Start Assist",
                "Adaptive Cruise Control",
              ],
            },
            exterior: {
              velg: "Alloy Wheels 18-20 inci",
              lampu: "LED",
            },
            mode: "Standard dan Sport",
            lainnya: [
              "Kamera Mundur dan Sensor Parkir",
              "Keyless Entry dan Push Start Button",
            ],
          },
        },
      },
      {
        id: 8,
        name: "Tesla Model X",
        seater: 7,
        kecepatan: "250 km/h",
        jenis: "SUV",
        harga: "Rp 2.000.000.000",
        image: "/img/tesla/Model-X.png",
        detail: {
          mesin: {
            type: "Dual Electric Motors (All-Wheel Drive)",
            cc: "-",
            tenaga: "670 hp (Long Range) / 1.020 hp (Plaid)",
          },
          transmisi: {
            type: "Automatic",
          },
          dimensi: {
            Panjang: "5,037 mm",
            Lebar: "2,070 mm",
            Tinggi: "1,684 mm",
          },
          kapasitas: {
            penumpang: 7,
            bagasi: "2,180 liter (dengan kursi belakang dilipat)",
          },
          Suspension: {
            front: "Air Suspension",
            rear: "Air Suspension",
            remDepan: "Ventilated Disc",
            remBelakang: "Ventilated Disc",
          },
          fitur: {
            interior: {
              material: "Kulit Premium",
              fitur: [
                "Airbags",
                "ABS dengan EBD",
                "Vehicle Stability Control (VSC)",
                "Lane Departure Warning",
                "Hill Start Assist",
                "Adaptive Cruise Control",
              ],
            },
            exterior: {
              velg: "Alloy Wheels 20-22 inci",
              lampu: "LED Adaptive Headlights",
            },
            mode: "Standard dan Sport",
            lainnya: [
              "Kamera Mundur dan Sensor Parkir",
              "Keyless Entry dan Push Start Button",
            ],
          },
        },
      },
      {
        id: 9,
        name: "Tesla Model Y",
        seater: 5,
        kecepatan: "217 km/h",
        jenis: "SUV",
        harga: "Rp 900.000.000",
        image: "/img/tesla/Model-Y.png",
        detail: {
          mesin: {
            type: "Dual Electric Motors (All-Wheel Drive)",
            cc: "-",
            tenaga: "315 hp (Long Range) / 456 hp (Performance)",
          },
          transmisi: {
            type: "-",
          },
          dimensi: {
            Panjang: "4,750 mm",
            Lebar: "1,920 mm",
            Tinggi: "1,624 mm",
          },
          kapasitas: {
            penumpang: 5,
            bagasi: "1,925 liter (dengan kursi belakang dilipat)",
          },
          Suspension: {
            front: "Independent MacPherson",
            rear: "Multi-Link",
            remDepan: "Ventilated Disc",
            remBelakang: "Ventilated Disc",
          },
          fitur: {
            interior: {
              material: "Kulit sintetis",
              fitur: [
                "Airbags",
                "ABS dengan EBD",
                "Vehicle Stability Control (VSC)",
                "Lane Departure Warning",
                "Hill Start Assist",
                "Adaptive Cruise Control",
              ],
            },
            exterior: {
              velg: "Alloy Wheels 19-20 inci",
              lampu: "LED",
            },
            mode: "Standard dan Sport",
            lainnya: [
              "Kamera Mundur dan Sensor Parkir",
              "Keyless Entry dan Push Start Button",
            ],
          },
        },
      },
      {
        id: 10,
        name: "Tesla Cybertruck",
        seater: 6,
        kecepatan: "209 km/h",
        jenis: "Pickup Truck",
        harga: "Rp 1.500.000.000",
        image: "/img/tesla/Cybertruck.png",
        detail: {
          mesin: {
            type: "Tri Motor All-Wheel Drive",
            cc: "-",
            tenaga: "800 hp",
          },
          transmisi: {
            type: "Automatic",
          },
          dimensi: {
            Panjang: "5,885 mm",
            Lebar: "2,027 mm",
            Tinggi: "1,905 mm",
          },
          kapasitas: {
            penumpang: 6,
            bagasi:
              "2.832 liter (termasuk kompartemen penyimpanan di tempat tidur truk, bagasi depan, dan bagasi kabin)",
          },
          Suspension: {
            front: "Adaptive Air Suspension",
            rear: "Adaptive Air Suspension",
            remDepan: "Ventilated Disc",
            remBelakang: "Ventilated Disc",
          },
          fitur: {
            interior: {
              material: "Kulit sintetis",
              fitur: [
                "Airbags",
                "ABS dengan EBD",
                "Vehicle Stability Control (VSC)",
                "Lane Departure Warning",
                "Hill Start Assist",
                "Adaptive Cruise Control",
              ],
            },
            exterior: {
              velg: "Alloy Wheels 20-22 inci",
              lampu: "LED",
            },
            mode: "Standard, Sport, dan Off-Road",
            lainnya: [
              "Kamera Mundur dan Sensor Parkir",
              "Keyless Entry dan Push Start Button",
              "Armor Glass Windows",
              "Autopilot",
            ],
          },
        },
      },
    ],
  },
  {
    categoryId: 3, // BMW
    cars: [
      {
        id: 11,
        name: "BMW i3",
        seater: 5,
        kecepatan: "150 km/h",
        jenis: "Hatchback",
        harga: "Rp 800.000.000",
        image: "/img/bmw/i3.png",
        detail: {
          mesin: {
            type: "Electric Motor",
            cc: "-",
            tenaga: "170 hp",
          },
          transmisi: {
            type: "Automatic",
          },
          dimensi: {
            Panjang: "4,011 mm",
            Lebar: "1,775 mm",
            Tinggi: "1,598 mm",
          },
          kapasitas: {
            penumpang: 5,
            bagasi: "260 liter",
          },
          Suspension: {
            front: "MacPherson Strut",
            rear: "Multi-Link",
            remDepan: "Ventilated Disc",
            remBelakang: "Solid Disc",
          },
          fitur: {
            interior: {
              material: "Kulit Ramah Lingkungan",
              fitur: [
                "Airbags",
                "ABS dengan EBD",
                "Vehicle Stability Control (VSC)",
                "Hill Start Assist",
                "Adaptive Cruise Control",
              ],
            },
            exterior: {
              velg: "Alloy Wheels 19 inci",
              lampu: "LED",
            },
            mode: "Eco dan Comfort",
            lainnya: [
              "Kamera Mundur dan Sensor Parkir",
              "Keyless Entry dan Push Start Button",
            ],
          },
        },
      },
      {
        id: 12,
        name: "BMW i4",
        seater: 5,
        kecepatan: "225 km/h",
        jenis: "Sedan",
        harga: "Rp 1.200.000.000",
        image: "/img/bmw/i4.png",
        detail: {
          mesin: {
            type: "Electric Motor",
            cc: "-",
            tenaga: "340 hp (i4 eDrive40) / 536 hp (i4 M50)",
          },
          transmisi: {
            type: "Automatic",
          },
          dimensi: {
            Panjang: "4,783 mm",
            Lebar: "1,852 mm",
            Tinggi: "1,448 mm",
          },
          kapasitas: {
            penumpang: 5,
            bagasi: "470 liter",
          },
          Suspension: {
            front: "Double-Joint Spring Strut",
            rear: "Five-Link",
            remDepan: "Ventilated Disc",
            remBelakang: "Ventilated Disc",
          },
          fitur: {
            interior: {
              material: "Kulit Premium",
              fitur: [
                "Airbags",
                "ABS dengan EBD",
                "Vehicle Stability Control (VSC)",
                "Lane Departure Warning",
                "Hill Start Assist",
                "Adaptive Cruise Control",
              ],
            },
            exterior: {
              velg: "Alloy Wheels 18-20 inci",
              lampu: "LED Adaptive Headlights",
            },
            mode: "Eco, Comfort, dan Sport",
            lainnya: [
              "Kamera Mundur dan Sensor Parkir",
              "Keyless Entry dan Push Start Button",
              "Harman Kardon Surround Sound System",
              "BMW iDrive 8",
            ],
          },
        },
      },
      {
        id: 13,
        name: "BMW iX3",
        seater: 5,
        kecepatan: "180 km/h",
        jenis: "SUV",
        harga: "Rp 1.400.000.000",
        image: "/img/bmw/iX3.png",
        detail: {
          mesin: {
            type: "Electric Motor",
            cc: "-",
            tenaga: "286 hp",
          },
          transmisi: {
            type: "Automatic",
          },
          dimensi: {
            Panjang: "4,734 mm",
            Lebar: "1,891 mm",
            Tinggi: "1,668 mm",
          },
          kapasitas: {
            penumpang: 5,
            bagasi: "510 liter",
          },
          Suspension: {
            front: "Double-Joint Spring Strut",
            rear: "Multi-Link",
            remDepan: "Ventilated Disc",
            remBelakang: "Ventilated Disc",
          },
          fitur: {
            interior: {
              material: "Kulit Sintetis",
              fitur: [
                "Airbags",
                "ABS dengan EBD",
                "Vehicle Stability Control (VSC)",
                "Lane Departure Warning",
                "Hill Start Assist",
                "Adaptive Cruise Control",
              ],
            },
            exterior: {
              velg: "Alloy Wheels 19-20 inci",
              lampu: "LED Adaptive Headlights",
            },
            mode: "Eco, Comfort, dan Sport",
            lainnya: [
              "Kamera Mundur dan Sensor Parkir",
              "Keyless Entry dan Push Start Button",
              "Panoramic Sunroof",
              "BMW iDrive 7",
            ],
          },
        },
      },
      {
        id: 14,
        name: "BMW iX",
        seater: 5,
        kecepatan: "200 km/h",
        jenis: "SUV",
        harga: "Rp 2.500.000.000",
        image: "/img/bmw/iX.png",
        detail: {
          mesin: {
            type: "Dual Electric Motors (All-Wheel Drive)",
            cc: "-",
            tenaga: "516 hp (iX xDrive50)",
          },
          transmisi: {
            type: "Automatic",
          },
          dimensi: {
            Panjang: "4,953 mm",
            Lebar: "1,967 mm",
            Tinggi: "1,696 mm",
          },
          kapasitas: {
            penumpang: 5,
            bagasi: "500 liter (1,750 liter dengan kursi belakang dilipat)",
          },
          Suspension: {
            front: "Double Wishbone",
            rear: "Multi-Link",
            remDepan: "Ventilated Disc",
            remBelakang: "Ventilated Disc",
          },
          fitur: {
            interior: {
              material: "Kulit Premium",
              fitur: [
                "Airbags",
                "ABS dengan EBD",
                "Vehicle Stability Control (VSC)",
                "Lane Departure Warning",
                "Hill Start Assist",
                "Adaptive Cruise Control",
              ],
            },
            exterior: {
              velg: "Alloy Wheels 20-22 inci",
              lampu: "LED Adaptive Headlights",
            },
            mode: "Eco, Comfort, dan Sport",
            lainnya: [
              "Kamera Mundur dan Sensor Parkir",
              "Keyless Entry dan Push Start Button",
              "Panoramic Sunroof",
              "BMW iDrive 8",
              "Harman Kardon Surround Sound System",
            ],
          },
        },
      },
      {
        id: 15,
        name: "BMW i7",
        seater: 5,
        kecepatan: "250 km/h",
        jenis: "Sedan",
        harga: "Rp 3.000.000.000",
        image: "/img/bmw/i7.png",
        detail: {
          mesin: {
            type: "Dual Electric Motors (All-Wheel Drive)",
            cc: "-",
            tenaga: "536 hp",
          },
          transmisi: {
            type: "Automatic",
          },
          dimensi: {
            Panjang: "5,391 mm",
            Lebar: "1,950 mm",
            Tinggi: "1,544 mm",
          },
          kapasitas: {
            penumpang: 5,
            bagasi: "500 liter",
          },
          Suspension: {
            front: "Double Wishbone",
            rear: "Multi-Link",
            remDepan: "Ventilated Disc",
            remBelakang: "Ventilated Disc",
          },
          fitur: {
            interior: {
              material: "Kulit Premium",
              fitur: [
                "Airbags",
                "ABS dengan EBD",
                "Vehicle Stability Control (VSC)",
                "Lane Departure Warning",
                "Hill Start Assist",
                "Adaptive Cruise Control",
                "Rear Seat Entertainment System",
                "Massage Seats",
              ],
            },
            exterior: {
              velg: "Alloy Wheels 20-22 inci",
              lampu: "LED Adaptive Headlights",
            },
            mode: "Eco, Comfort, dan Sport",
            lainnya: [
              "Kamera Mundur dan Sensor Parkir",
              "Keyless Entry dan Push Start Button",
              "Panoramic Sunroof",
              "BMW iDrive 8",
              "Harman Kardon Surround Sound System",
            ],
          },
        },
      },
    ],
  },
  {
    categoryId: 4, // mitsubishi
    cars: [
      {
        id: 16,
        name: "Mitsubishi i-MiEV",
        seater: 4,
        kecepatan: "130 km/h",
        jenis: "Hatchback",
        harga: "Rp 600.000.000",
        image: "/img/mitsubishi/i-miev.png",
        detail: {
          mesin: {
            type: "Electric Motor",
            cc: "-",
            tenaga: "66 hp",
          },
          transmisi: {
            type: "Automatic",
          },
          dimensi: {
            Panjang: "3,475 mm",
            Lebar: "1,475 mm",
            Tinggi: "1,610 mm",
          },
          kapasitas: {
            penumpang: 4,
            bagasi: "235 liter",
          },
          Suspension: {
            front: "MacPherson Strut",
            rear: "Torsion Beam",
            remDepan: "Ventilated Disc",
            remBelakang: "Drum",
          },
          fitur: {
            interior: {
              material: "Kain",
              fitur: [
                "Airbags",
                "ABS dengan EBD",
                "Vehicle Stability Control (VSC)",
                "Hill Start Assist",
              ],
            },
            exterior: {
              velg: "Alloy Wheels 15 inci",
              lampu: "Halogen",
            },
            mode: "Eco dan Comfort",
            lainnya: [
              "Kamera Mundur dan Sensor Parkir",
              "Keyless Entry dan Push Start Button",
            ],
          },
        },
      },
      {
        id: 17,
        name: "Mitsubishi Outlander PHEV",
        seater: 5,
        kecepatan: "170 km/h",
        jenis: "SUV",
        harga: "Rp 1.200.000.000",
        image: "/img/mitsubishi/outlander-phev.png",
        detail: {
          mesin: {
            type: "Plug-in Hybrid Electric",
            cc: "2,400 cc",
            tenaga: "126 hp (Motor Elektrik) + 135 hp (Motor Bensin)",
          },
          transmisi: {
            type: "Automatic",
          },
          dimensi: {
            Panjang: "4,695 mm",
            Lebar: "1,800 mm",
            Tinggi: "1,710 mm",
          },
          kapasitas: {
            penumpang: 5,
            bagasi: "450 liter",
          },
          Suspension: {
            front: "MacPherson Strut",
            rear: "Multi-Link",
            remDepan: "Ventilated Disc",
            remBelakang: "Solid Disc",
          },
          fitur: {
            interior: {
              material: "Kulit Sintetis",
              fitur: [
                "Airbags",
                "ABS dengan EBD",
                "Vehicle Stability Control (VSC)",
                "Lane Departure Warning",
                "Hill Start Assist",
                "Adaptive Cruise Control",
              ],
            },
            exterior: {
              velg: "Alloy Wheels 18 inci",
              lampu: "LED",
            },
            mode: "Eco, Normal, dan Sport",
            lainnya: [
              "Kamera Mundur dan Sensor Parkir",
              "Keyless Entry dan Push Start Button",
              "Panoramic Sunroof",
            ],
          },
        },
      },
      {
        id: 18,
        name: "Mitsubishi Eclipse Cross PHEV",
        seater: 5,
        kecepatan: "180 km/h",
        jenis: "SUV",
        harga: "Rp 1.300.000.000",
        image: "/img/mitsubishi/eclipse-cross-phev.png",
        detail: {
          mesin: {
            type: "Plug-in Hybrid Electric",
            cc: "2,400 cc",
            tenaga: "127 hp (Motor Elektrik) + 135 hp (Motor Bensin)",
          },
          transmisi: {
            type: "Automatic",
          },
          dimensi: {
            Panjang: "4,545 mm",
            Lebar: "1,805 mm",
            Tinggi: "1,685 mm",
          },
          kapasitas: {
            penumpang: 5,
            bagasi: "463 liter",
          },
          Suspension: {
            front: "MacPherson Strut",
            rear: "Multi-Link",
            remDepan: "Ventilated Disc",
            remBelakang: "Solid Disc",
          },
          fitur: {
            interior: {
              material: "Kulit Sintetis",
              fitur: [
                "Airbags",
                "ABS dengan EBD",
                "Vehicle Stability Control (VSC)",
                "Lane Departure Warning",
                "Hill Start Assist",
                "Adaptive Cruise Control",
              ],
            },
            exterior: {
              velg: "Alloy Wheels 18 inci",
              lampu: "LED",
            },
            mode: "Eco, Normal, dan Sport",
            lainnya: [
              "Kamera Mundur dan Sensor Parkir",
              "Keyless Entry dan Push Start Button",
              "Panoramic Sunroof",
            ],
          },
        },
      },
      {
        id: 19,
        name: "Mitsubishi Airtrek EV",
        seater: 5,
        kecepatan: "160 km/h",
        jenis: "SUV",
        harga: "Rp 900.000.000",
        image: "/img/mitsubishi/airtrek-ev.png",
        detail: {
          mesin: {
            type: "Electric Motor",
            cc: "-",
            tenaga: "181 hp",
          },
          transmisi: {
            type: "Automatic",
          },
          dimensi: {
            Panjang: "4,600 mm",
            Lebar: "1,890 mm",
            Tinggi: "1,720 mm",
          },
          kapasitas: {
            penumpang: 5,
            bagasi: "490 liter",
          },
          Suspension: {
            front: "MacPherson Strut",
            rear: "Multi-Link",
            remDepan: "Ventilated Disc",
            remBelakang: "Ventilated Disc",
          },
          fitur: {
            interior: {
              material: "Kulit Sintetis",
              fitur: [
                "Airbags",
                "ABS dengan EBD",
                "Vehicle Stability Control (VSC)",
                "Lane Departure Warning",
                "Hill Start Assist",
                "Adaptive Cruise Control",
              ],
            },
            exterior: {
              velg: "Alloy Wheels 19 inci",
              lampu: "LED",
            },
            mode: "Eco, Comfort, dan Sport",
            lainnya: [
              "Kamera Mundur dan Sensor Parkir",
              "Keyless Entry dan Push Start Button",
              "Panoramic Sunroof",
            ],
          },
        },
      },
    ],
  },
  {
    categoryId: 5, // hyundai
    cars: [
      {
        id: 20,
        name: "Hyundai Kona Electric",
        seater: 5,
        kecepatan: "155 km/h",
        jenis: "SUV",
        harga: "Rp 700.000.000",
        image: "/img/hyundai/kona-electric.png",
        detail: {
          mesin: {
            type: "Electric Motor",
            cc: "-",
            tenaga: "134 hp (Standard Range) / 201 hp (Long Range)",
          },
          transmisi: {
            type: "Automatic",
          },
          dimensi: {
            Panjang: "4,180 mm",
            Lebar: "1,800 mm",
            Tinggi: "1,570 mm",
          },
          kapasitas: {
            penumpang: 5,
            bagasi: "332 liter",
          },
          Suspension: {
            front: "MacPherson Strut",
            rear: "Multi-Link",
            remDepan: "Ventilated Disc",
            remBelakang: "Solid Disc",
          },
          fitur: {
            interior: {
              material: "Kulit Sintetis",
              fitur: [
                "Airbags",
                "ABS dengan EBD",
                "Vehicle Stability Control (VSC)",
                "Lane Departure Warning",
                "Hill Start Assist",
                "Adaptive Cruise Control",
              ],
            },
            exterior: {
              velg: "Alloy Wheels 17 inci",
              lampu: "LED",
            },
            mode: "Eco, Normal, dan Sport",
            lainnya: [
              "Kamera Mundur dan Sensor Parkir",
              "Keyless Entry dan Push Start Button",
            ],
          },
        },
      },
      {
        id: 21,
        name: "Hyundai Ioniq Electric",
        seater: 5,
        kecepatan: "165 km/h",
        jenis: "Sedan",
        harga: "Rp 800.000.000",
        image: "/img/hyundai/ioniq-electric.png",
        detail: {
          mesin: {
            type: "Electric Motor",
            cc: "-",
            tenaga: "134 hp",
          },
          transmisi: {
            type: "Automatic",
          },
          dimensi: {
            Panjang: "4,470 mm",
            Lebar: "1,820 mm",
            Tinggi: "1,450 mm",
          },
          kapasitas: {
            penumpang: 5,
            bagasi: "357 liter",
          },
          Suspension: {
            front: "MacPherson Strut",
            rear: "Multi-Link",
            remDepan: "Ventilated Disc",
            remBelakang: "Solid Disc",
          },
          fitur: {
            interior: {
              material: "Kulit Sintetis",
              fitur: [
                "Airbags",
                "ABS dengan EBD",
                "Vehicle Stability Control (VSC)",
                "Lane Departure Warning",
                "Hill Start Assist",
                "Adaptive Cruise Control",
              ],
            },
            exterior: {
              velg: "Alloy Wheels 16 inci",
              lampu: "LED",
            },
            mode: "Eco, Normal, dan Sport",
            lainnya: [
              "Kamera Mundur dan Sensor Parkir",
              "Keyless Entry dan Push Start Button",
            ],
          },
        },
      },
      {
        id: 22,
        name: "Hyundai Ioniq 5",
        seater: 5,
        kecepatan: "185 km/h",
        jenis: "SUV",
        harga: "Rp 1.100.000.000",
        image: "/img/hyundai/ioniq-5.png",
        detail: {
          mesin: {
            type: "Electric Motor",
            cc: "-",
            tenaga: "168 hp (Standard Range) / 225 hp (Long Range)",
          },
          transmisi: {
            type: "Automatic",
          },
          dimensi: {
            Panjang: "4,635 mm",
            Lebar: "1,890 mm",
            Tinggi: "1,605 mm",
          },
          kapasitas: {
            penumpang: 5,
            bagasi: "527 liter",
          },
          Suspension: {
            front: "MacPherson Strut",
            rear: "Multi-Link",
            remDepan: "Ventilated Disc",
            remBelakang: "Solid Disc",
          },
          fitur: {
            interior: {
              material: "Kulit Sintetis",
              fitur: [
                "Airbags",
                "ABS dengan EBD",
                "Vehicle Stability Control (VSC)",
                "Lane Departure Warning",
                "Hill Start Assist",
                "Adaptive Cruise Control",
              ],
            },
            exterior: {
              velg: "Alloy Wheels 19 inci",
              lampu: "LED",
            },
            mode: "Eco, Normal, dan Sport",
            lainnya: [
              "Kamera Mundur dan Sensor Parkir",
              "Keyless Entry dan Push Start Button",
              "Panoramic Sunroof",
            ],
          },
        },
      },
      {
        id: 23,
        name: "Hyundai Nexo",
        seater: 5,
        kecepatan: "180 km/h",
        jenis: "SUV",
        harga: "Rp 1.500.000.000",
        image: "/img/hyundai/nexo.png",
        detail: {
          mesin: {
            type: "Electric Motor (Fuel Cell)",
            cc: "-",
            tenaga: "161 hp",
          },
          transmisi: {
            type: "Automatic",
          },
          dimensi: {
            Panjang: "4,670 mm",
            Lebar: "1,860 mm",
            Tinggi: "1,630 mm",
          },
          kapasitas: {
            penumpang: 5,
            bagasi: "461 liter",
          },
          Suspension: {
            front: "MacPherson Strut",
            rear: "Multi-Link",
            remDepan: "Ventilated Disc",
            remBelakang: "Solid Disc",
          },
          fitur: {
            interior: {
              material: "Kulit Sintetis",
              fitur: [
                "Airbags",
                "ABS dengan EBD",
                "Vehicle Stability Control (VSC)",
                "Lane Departure Warning",
                "Hill Start Assist",
                "Adaptive Cruise Control",
              ],
            },
            exterior: {
              velg: "Alloy Wheels 19 inci",
              lampu: "LED",
            },
            mode: "Eco, Normal, dan Sport",
            lainnya: [
              "Kamera Mundur dan Sensor Parkir",
              "Keyless Entry dan Push Start Button",
              "Panoramic Sunroof",
            ],
          },
        },
      },
      {
        id: 24,
        name: "Hyundai Ioniq 6",
        seater: 5,
        kecepatan: "220 km/h",
        jenis: "Sedan",
        harga: "Rp 1.400.000.000",
        image: "/img/hyundai/Ioniq 6.png",
        detail: {
          mesin: {
            type: "Electric Motor",
            cc: "-",
            tenaga: "225 hp (Standard Range) / 320 hp (Long Range)",
          },
          transmisi: {
            type: "Automatic",
          },
          dimensi: {
            Panjang: "4,855 mm",
            Lebar: "1,880 mm",
            Tinggi: "1,495 mm",
          },
          kapasitas: {
            penumpang: 5,
            bagasi: "401 liter",
          },
          Suspension: {
            front: "MacPherson Strut",
            rear: "Multi-Link",
            remDepan: "Ventilated Disc",
            remBelakang: "Solid Disc",
          },
          fitur: {
            interior: {
              material: "Kulit Sintetis",
              fitur: [
                "Airbags",
                "ABS dengan EBD",
                "Vehicle Stability Control (VSC)",
                "Lane Departure Warning",
                "Hill Start Assist",
                "Adaptive Cruise Control",
              ],
            },
            exterior: {
              velg: "Alloy Wheels 19 inci",
              lampu: "LED",
            },
            mode: "Eco, Normal, dan Sport",
            lainnya: [
              "Kamera Mundur dan Sensor Parkir",
              "Keyless Entry dan Push Start Button",
              "Panoramic Sunroof",
            ],
          },
        },
      },
    ],
  },
];

export const promotionList = [
  {
    id: 1,
    text: "Mobil listrik menawarkan jangkauan luar biasa hingga 400 km dalam sekali pengisian, memastikan Anda dapat melakukan perjalanan jarak jauh.",
    icon: "/img/efisien.png",
  },
  {
    id: 2,
    text: "Dengan nol emisi, mobil listrik berkontribusi pada lingkungan yang lebih bersih, membantu mengurangi polusi udara dan melawan perubahan iklim.",
    icon: "/img/co2.png",
  },
  {
    id: 3,
    text: "Nikmati manfaat teknologi pintar yang meningkatkan kenyamanan dan keamanan di jalan",
    icon: "/img/technology.png",
  },
  {
    id: 4,
    text: "Rasakan perpaduan sempurna antara daya tarik estetika dan efisiensi aerodinamis, dirancang untuk memberikan gaya dan kinerja.",
    icon: "/img/design-thinking.png",
  },
];

export const brandList = [
  {
    id: 1,
    name: "Toyota",
    image: "/img/toyota.png",
  },
  {
    id: 2,
    name: "Tesla",
    image: "/img/tesla.png",
  },
  {
    id: 3,
    name: "BMW",
    image: "/img/bmw.png",
  },
  {
    id: 4,
    name: "Mitsubishi",
    image: "/img/mitshubishi.png",
  },
  {
    id: 5,
    name: "Hyundai",
    image: "/img/hyundai.png",
  },
];

// payment methods
export const BankTransfer = [
  {
    id: 1,
    name: "BCA",
    image: "/img/payment/bca.png",
  },
  {
    id: 2,
    name: "BNI",
    image: "/img/payment/bni.png",
  },
  {
    id: 3,
    name: "BRI",
    image: "/img/payment/bri.png",
  },
  {
    id: 4,
    name: "Mandiri",
    image: "/img/payment/mandiri.png",
  },
  {
    id: 5,
    name: "Permata",
    image: "/img/payment/permata.png",
  },
  {
    id: 6,
    name: "Bank Lainnya",
    image: "/img/payment/bank.png",
  },
];

export const DebitCard = [
  {
    id: 1,
    name: "Visa Debit Card",
    image: "/img/payment/visa.png",
  },
  {
    id: 2,
    name: "Mastercard Debit Card",
    image: "/img/payment/mastercard.png",
  },
  {
    id: 3,
    name: "GPN Debit Card",
    image: "/img/payment/gpn.png",
  },
];
