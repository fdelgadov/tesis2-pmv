package com.tesis.pmv.controller.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tesis.pmv.entity.SensorData;
import com.tesis.pmv.service.SensorDataService;

@RestController
@RequestMapping(path = "/api/sensorData")
public class SensorDataController {
    @Autowired
    private SensorDataService sds;

    @GetMapping(path = "/all")
    public List<SensorData> findAll(){
        return sds.findAll();
    }

    @GetMapping(path = "/last")
    public SensorData findLastData(){
        SensorData sd = sds.getLastData();
        sds.save(sd);
        
        return sd;
    }
}
