#!/bin/sh

rm public/* -rf
hugo
aws s3 sync ./public/ s3://zamenhof.gitgis.com/ --delete --acl public-read
