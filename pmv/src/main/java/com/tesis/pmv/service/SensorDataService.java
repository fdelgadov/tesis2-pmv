package com.tesis.pmv.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tesis.pmv.entity.SensorData;
import com.tesis.pmv.entity.repository.SensorDataRepository;

@Service
public class SensorDataService {
    @Autowired
    private SensorDataRepository sdr;

    private final Random random = new Random();

    public SensorData getLastData() {
        SensorData sensorData = new SensorData();
        sensorData.setTemperatura(15 + (40 - 15) * random.nextDouble());
        sensorData.setPresion(900 + (1100 - 900) * random.nextDouble());
        sensorData.setVibracion(0.1 + (2.0 - 0.1) * random.nextDouble());
        sensorData.setTimestamp(LocalDateTime.now());
        return sensorData;
    }

    public List<SensorData> findAll(){
        return sdr.findAll();
    }

    public SensorData save(SensorData o){
        return sdr.save(o);
    }
}
