#!/bin/bash

echo "🧪 Testing Medical Forms API..."

# Test GET request
echo "📋 Testing GET /api/medical-forms"
curl -s -X GET http://localhost:3000/api/medical-forms | jq '.' || echo "No jq installed, raw output:"

echo -e "\n"

# Test POST request
echo "📤 Testing POST /api/medical-forms"
curl -s -X POST http://localhost:3000/api/medical-forms \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Patient",
    "age": 30,
    "gender": "male",  
    "phone": "1234567890",
    "height": 180,
    "weight": 75,
    "complaints": "Test complaint",
    "isMobile": false,
    "userAgent": "Test Agent"
  }' | jq '.' || echo "Raw response received"

echo -e "\n✅ Test completed!"