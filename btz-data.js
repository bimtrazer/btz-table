let dataSet = [
    { "Item": "Trabajos preliminares", "SS":100, "PB":100, "N1":100, "N2":100, "N3":100, "N4":100, "N5":100, "N6":100, "N7":100, "N8":100, "N9":12, "N10":80, "N11":100, "N12":100, "AZ":8},
    { "Item": "Movimiento de suelo", "SS":100, "PB":100, "N1":100, "N2":100, "N3":100, "N4":100, "N5":100, "N6":100, "N7":100, "N8":100, "N9":100, "N10":43, "N11":100, "N12":100, "AZ":23},
    { "Item": "Fundaciones", "SS":100, "PB":100, "N1":100, "N2":100, "N3":100, "N4":100, "N5":100, "N6":100, "N7":100, "N8":100, "N9":100, "N10":78, "N11":100, "N12":100, "AZ":100},
    { "Item": "Estructura de hormigón armado", "SS":100, "PB":100, "N1":100, "N2":100, "N3":100, "N4":100, "N5":100, "N6":100, "N7":100, "N8":100, "N9":100, "N10":12, "N11":100, "N12":100, "AZ":100},
    { "Item": "Mamposterias", "SS":100, "PB":100, "N1":10, "N2":100, "N3":100, "N4":40, "N5":100, "N6":100, "N7":100, "N8":100, "N9":100, "N10":100, "N11":100, "N12":12, "AZ":100},
  ];

const RESPONSE_EXAMPLE = {
  "ID": "00",
  "DESCRIPCION": "Successful",
  "DATA": [
    {
      "Item": "Ascensores",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Capa Aisladora En P.B.",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Cargas",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Carpinteria Acero Inoxidable",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Carpinteria Aluminio Aberturas",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Carpinteria Aluminio Baranda Balcon (INCLUYE Vidrios)",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Carpinteria Chapa (BARANDAS Escaleras)",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Carpinteria Chapa (MARCOS Y Puertas)",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Carpinteria En P.B. (VIDRIOS Templados)",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Carpinteria Madera (MARCOS Y Puertas Interiores)",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Cielorrasos Aplicados Deptos",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Cielorrasos Suspendidos Baños",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Cielorrasos Suspendidos Palieres",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Contrapisos, Carpetas",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Esmalte Sintético En Carpinterias",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Estructura De Hormigón Armado",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Frentes De Placard",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Fundaciones",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Impermeabilizaciones S/Azotea",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Impermeabilizaciones Tanque Y Cisterna",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Inst. Eléctricas",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Inst. Extinción de incendios",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Instalacion Electrica Y Sd - Cableados",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Instalacion Electrica Y Sd - Conducciones",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Instalacion Electrica Y Sd - Dispositivos",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Instalacion Electrica Y Sd - Tableros",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Instalacion Sanitaria Deptos",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Instalacion Sanitaria Montantes",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Instalaciones Termomecanicas",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Limpieza De Obra",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Mamposterias",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Marmoles Y Granitos",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Marquesina De Ingreso",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Movimiento De Suelo",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Muebles Bajo Mesadas Y Alacenas",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Pintura Exterior",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Pintura Latex Muros Y Cielorrasos",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Planta De Bombeo Agua Potable",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Planta De Extincion De Incendios",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Revestimientos En Muros Cocinas Y Baños",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Revestimientos En Muros Espacios De Servicio Y Tecnicos",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Revestimientos Escaleras",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Revoques Exteriores Balcones",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Revoques Exteriores Fachada Norte",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Revoques Exteriores Fachada Sur",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Revoques Interiores Yeso Deptos",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Sanitarios Y Griferias",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Solados Balcones Y Terrazas",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Solados Dptos.",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Solados Espacios Tecnicos",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Solados Palieres",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Trabajos Preliminares",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    },
    {
      "Item": "Veredas Perimetrales Y Rampas",
      "column": {
        "12-SS": 0,
        "13-PB": 0,
        "14-N1": 0,
        "15-N2": 0,
        "16-N3": 0,
        "17-N4": 0,
        "18-N5": 0,
        "19-N6": 0,
        "20-N7": 0,
        "21-N8": 0,
        "22-N9": 0,
        "23-N10": 0,
        "24-N11": 0,
        "25-N12": 0,
        "26-AZ": 0
      }
    }
  ]
}

// handle API response
function handleResponse(response) {
  const { DATA: dataFromApi } = response;

  // Transform column keys from [labelKey-name: value] to [name: value]
  const transformedData = dataFromApi.map(item => {
    const { column: columnFromApi } = item;
    const column = Object.keys(columnFromApi).reduce((acc, key) => {
      const [_, name] = key.split("-");
      acc[name] = columnFromApi[key];
      return acc;
    }, {});
    return { ...item, column };
  });

  return transformedData.map((item) => {
    const { Item, column } = item;
    return {
      Item,
      ...column,
    };
  });
}

// Builds the HTML Table out of dataSet.
function buildHtmlTable(selector) {
  getDataFromApi().then((res) => {
    const dataSet = handleResponse(res);

    let columns = addAllColumnHeaders(dataSet, selector);
  
    for (let i = 0; i < dataSet.length; i++) {
      let row$ = $('<tr/>');
      for (let colIndex = 0; colIndex < columns.length; colIndex++) {
        let cellValue = dataSet[i][columns[colIndex]];
        if (cellValue == null) cellValue = "";
        let rtd = false
        if (cellValue <= 34){
          //row$.append($('<td bgcolor = black /><font color = white/>').html(cellValue));
          row$.append($('<td bgcolor = black ></td>').html(cellValue));
          dataSet[i][columns[colIndex]]
          rtd = true;
        }
        if (cellValue > 34 && cellValue <= 69 ){
          row$.append($('<td bgcolor = red />').html(cellValue));
          rtd = true;
        } 
        if (cellValue > 69 && cellValue <= 94 ){
          row$.append($('<td bgcolor = yellow />').html(cellValue));
          rtd = true;
        } 
        if (cellValue > 94 && cellValue <= 100 ){
          row$.append($('<td bgcolor = green />').html(cellValue));
          rtd = true;
        } 
  
        if (rtd==false){
          row$.append($('<td/>').html(cellValue));
        }
      }
      $(selector).append(row$);
    }
  });
}

function addAllColumnHeaders(dataSet, selector) {
  let columnSet = [];
  let headerTr$ = $('<tr/>');

  for (let i = 0; i < dataSet.length; i++) {
    let rowHash = dataSet[i];
    for (let key in rowHash) {
      if ($.inArray(key, columnSet) == -1) {
        columnSet.push(key);
        headerTr$.append($('<th/>').html(key));
      }
    }
  }
  $(selector).append(headerTr$);

  return columnSet;
}

function exportTableToExcel(tableID, filename = ''){
    let downloadLink;
    let dataType = 'application/vnd.ms-excel';
    let tableSelect = document.getElementById(tableID);
    let tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        let blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
}

// remake a function to get data from API using promises
function getDataFromApi() {
  const URL = 'http://36.bimtrazer.com/'

  return fetch(URL)
    .then(response => response.json())
    .catch(error => {
      console.error(error)
      return RESPONSE_EXAMPLE
    })
}
